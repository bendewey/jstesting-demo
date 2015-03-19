using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Specs.Startup))]
namespace Specs
{   
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
			app.UseFileServer();
        }
    }
}
