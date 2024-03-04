const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const NAUTIMASTER_BTP_SRV = await cds.connect.to("NAUTIMASTER_BTP_SRV"); 
      srv.on('READ', 'BidMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'BusinessPartnerSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'ClassMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'CostMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'EventMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'ReleaseStrategySet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'MaintainGroupSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
      srv.on('READ', 'VoyageReleaseSet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 
}