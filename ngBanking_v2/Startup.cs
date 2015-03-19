using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(NgBanking.Startup))]
namespace NgBanking
{   
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
			app.UseFileServer();
        }
    }
}
