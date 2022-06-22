using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace server.Controllers
{
    [EnableCors(origins: "*",headers:"*",methods:"*")]
    public class DrinkController : ApiController
    {
        private DrinkBL.DrinkBL drinkBL = new DrinkBL.DrinkBL();

        // api/drinks
         public List<Drink> Get()
        {
            List<Drink> drinks = drinkBL.GetDrinks();
            return drinks;
        }

        //api/drinks
        public Drink Post(Drink drink)
        {
            Drink newDrink = drinkBL.CreateDrink(drink);
            return drink;
        }
    }
}
