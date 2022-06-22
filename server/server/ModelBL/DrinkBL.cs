using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace server.DrinkBL
{
    public class DrinkBL
    {
        private DrinkEntities drinkEntities = new DrinkEntities();
        
        public List<Drink> GetDrinks()
        {
            List<Drink> drinks = drinkEntities.Drink.ToList();
            return drinks;
        }

        public Drink GetDrink(int id)
        {
            Drink drink = drinkEntities.Drink.FirstOrDefault(d => d.Id == id);
            return drink;
        }

        public Drink CreateDrink(Drink drink)
        {
            Drink newDrink;
            using (drinkEntities)
            {
                drinkEntities.Drink.Add(drink);
                drinkEntities.SaveChanges();
                newDrink  = drinkEntities.Drink.FirstOrDefault(d => d.Id == drink.Id);
            }
          
            return newDrink;
        }
    }
}