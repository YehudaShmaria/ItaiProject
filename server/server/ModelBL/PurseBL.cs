using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace server.DrinkBL
{
    public class PurseBL
    {
        private DrinkEntities drinkEntities = new DrinkEntities();

        public Purse GetPurse()
        {
            Purse purse = drinkEntities.Purse.FirstOrDefault();
            return purse;
        }

        public Purse UpdatePurse (int id, int count)
        {
            Purse result = drinkEntities.Purse.FirstOrDefault(x => x.Id == id);
            using (drinkEntities)
            {
                if (result != null)
                {
                    result.money = count;
                    drinkEntities.SaveChanges();
                }
            }
            return result;
        }
    }
}