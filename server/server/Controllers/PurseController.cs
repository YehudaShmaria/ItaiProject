using server.DrinkBL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace server.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PurseController : ApiController
    {
        private PurseBL purseBL = new PurseBL();
        // GET: api/purse
        public Purse Get()
        {
            Purse purse = purseBL.GetPurse();
            return purse;
        }

        //api/purse/1?count=12
        public Purse Put(int id, int count)
        {
            Purse purse = purseBL.UpdatePurse(id, count);
            return purse;
        }
    }
}
