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

var app = builder.Build();

app.UseHttpsRedirection();

app.MapHub<AleaEvangeliiHub>( "/realtime/alea-evangelii" );

app.Run();
