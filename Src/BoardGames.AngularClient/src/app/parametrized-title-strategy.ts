import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable()
export class ParametrizedTitleStrategy extends TitleStrategy {
  constructor(
    private readonly title: Title ) {
    super();
  }

  override updateTitle( routerState: RouterStateSnapshot ) {
    let title = this.buildTitle( routerState );

    let route = routerState.root;
    while ( route.firstChild ) {
      route = route.firstChild
    }

    if ( title !== undefined ) {
      let params = route.params

      for ( const param in params ) {
        if ( Object.prototype.hasOwnProperty.call( params, param ) ) {
          const value = params[param];

          let regex = new RegExp( `(^|[^\\\\]):${param}`, 'g' )
          title = title.replace( regex, `$1${value}` )
        }
      }

      title = title.replace( /\\:/g, `:` )
      this.title.setTitle( title );
    }
  }
}