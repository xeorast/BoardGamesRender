using System.Text.Json.Serialization;
using System.Text.Json;
using BoardGames.Server.Hubs;
using BoardGames.Server.Data.AleaEvangelii;

var builder = WebApplication.CreateBuilder( args );

builder.Services
	.AddSignalR()
	.AddJsonProtocol( options =>
	{
		options.PayloadSerializerOptions.Converters.Add( new JsonStringEnumConverter( JsonNamingPolicy.CamelCase ) );
	} );

builder.Services.AddSingleton<IAERoomStorage, AERoomStorage>();

var corsOrigins = builder.Configuration
			.GetValue<string>( "CorsOrigin" )
			?.Split( ',' )
			?? Array.Empty<string>();

builder.Services.AddCors( o =>
{
	o.AddDefaultPolicy( p =>
	{
		p.WithOrigins( corsOrigins )
			.AllowAnyMethod()
			.AllowAnyHeader()
			.AllowCredentials();
	} );
} );

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors();

app.MapHub<AleaEvangeliiHub>( "/realtime/alea-evangelii" );

app.Run();
