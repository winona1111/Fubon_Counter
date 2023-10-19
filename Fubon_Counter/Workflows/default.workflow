<?xml version="1.0" encoding="UTF-8"?>
<xmi:XMI xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:datatypes="http://studio.genesyslab.com/common/datatypes/" xmlns:ird="http://studio.genesyslab.com/ird/" xmlns:notation="http://www.eclipse.org/gmf/runtime/1.0.2/notation" xsi:schemaLocation="http://studio.genesyslab.com/common/datatypes/ http://studio.genesyslab.com/common/#//datatypes">
  <ird:StrategyDiagram xmi:id="_33D0EIoaEeG_nt9_QYQUcg" name="default" designedUsing="Composer 8.1.561.23">
    <history>8.1.0</history>
    <history>8.1.300.01</history>
    <blocks xmi:type="ird:EntryBlock" xmi:id="_6e2LkNz6EeKyG9aF7VXEXg" name="Entry1" starting="true" category="Entry">
      <variables xmi:type="datatypes:Variable" xmi:id="_6e-ucNz6EeKyG9aF7VXEXg" name="system.BaseURL" value="getBaseURL()" description="Base URL" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6e-ucdz6EeKyG9aF7VXEXg" name="system.RelativePathURL" value="getRelativePathURL()" description="Relative path" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fBxwNz6EeKyG9aF7VXEXg" name="system.Language" value="'en-US'" description="Application Language" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fBxwdz6EeKyG9aF7VXEXg" name="system.InteractionID" value="system.StartEvent.data.interactionid" description="The current interaction ID." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fBxwtz6EeKyG9aF7VXEXg" name="system.CallID" value="_genesys.ixn.interactions[system.InteractionID].voice.callid" description="callid created by the switch." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY0Nz6EeKyG9aF7VXEXg" name="system.DNIS" value="_genesys.ixn.interactions[system.InteractionID].voice.dnis" description="DNIS associated with Called phone number" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY0dz6EeKyG9aF7VXEXg" name="system.ThisDN" value="system.StartEvent.data.focusdeviceid" description="ThisDN attribute of last point of presence for this call" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY0tz6EeKyG9aF7VXEXg" name="system.ANI" value="_genesys.ixn.interactions[system.InteractionID].voice.ani" description="ANI associated with the calling party." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY09z6EeKyG9aF7VXEXg" name="system.StartEvent" value="undefined" description="The content of the specified start event" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY1Nz6EeKyG9aF7VXEXg" name="system.LastErrorEvent" value="'undefined'" description="Last error" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY1dz6EeKyG9aF7VXEXg" name="system.LastErrorEventName" value="'undefined'" description="Last error event name" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY1tz6EeKyG9aF7VXEXg" name="system.LastErrorDescription" value="'undefined'" description="Last error description" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY19z6EeKyG9aF7VXEXg" name="system.WebServiceStubbing" value="'0'" description="Flag to control WebServices Stubbing. '1' - ON" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY2Nz6EeKyG9aF7VXEXg" name="system.TerminateIxnOnExit" value="1" description="Flag to control if Exit block should terminate multimedia interactions. '1' - ON" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY2dz6EeKyG9aF7VXEXg" name="system.TenantID" value="parseInt(_genesys.ixn.interactions[system.InteractionID].tenantid)" description="The current Tenant ID." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY2tz6EeKyG9aF7VXEXg" name="system.TenantName" value="_genesys.session.tenant" description="The current Tenant name." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY29z6EeKyG9aF7VXEXg" name="system.LastTargetComponentSelected" value="'undefined'" description="Target to which the Interaction was routed definitively." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY3Nz6EeKyG9aF7VXEXg" name="system.LastTargetObjectSelected" value="'undefined'" description="High-level Target to which the Interaction was routed definitively" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY3dz6EeKyG9aF7VXEXg" name="system.LastTargetSelected" value="'undefined'" description="DN and the Switch name of the Target to which the Interaction was routed definitively" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY3tz6EeKyG9aF7VXEXg" name="system.LastVirtualQueueSelected" value="'undefined'" description="The Alias of the Virtual Queue specified in the target list to which the target where the interaction was routed belongs" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY39z6EeKyG9aF7VXEXg" name="system.LastSubmitRequestId" value="'undefined'" description="Requestid  value of the Last queue:submit execution" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY4Nz6EeKyG9aF7VXEXg" name="system.OPM" value="getOPMParameters()" description="Operational Parameters Data Variable" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY4dz6EeKyG9aF7VXEXg" name="system.OCS_RecordURI" value="getWorkflowRecordURI()" description="OCS Record URI" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY4tz6EeKyG9aF7VXEXg" name="system.OCS_URI" value="getWorkflowOCSURI()" description="OCS URI" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY49z6EeKyG9aF7VXEXg" name="system.OCS_Record" value="getWorkflowOCSRecord()" description="OCS Record" type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY5Nz6EeKyG9aF7VXEXg" name="system.ParentInteractionID" value="_genesys.ixn.interactions[system.InteractionID].parentid" description="The current interaction parent ID." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_6fCY5dz6EeKyG9aF7VXEXg" name="system.OriginatingSession" value="undefined" description="The originating session context." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_HnTQUFt0Ee6yI_PH36Y4bA" name="system.InteractionUID" value="_genesys.ixn.interactions[system.InteractionID].g_uid" description="The globally unique ID for the interaction that is defined by the underlying media system." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_HnTQUVt0Ee6yI_PH36Y4bA" name="system.InitialInteractionID" value="system.StartEvent.data.interactionid" description="The ID of the interaction that started this session." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_HnTQUlt0Ee6yI_PH36Y4bA" name="system.CurrentQueue" value="_genesys.ixn.interactions[system.InteractionID].msgbased.queue" description="queue attribute for this interaction." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_HnTQU1t0Ee6yI_PH36Y4bA" name="system.InteractionMediaType" value="undefined" description="The originating media type of the interaction." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_HnTQVFt0Ee6yI_PH36Y4bA" name="system.InteractionType" value="undefined" description="The origin type of the interaction." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_HnTQVVt0Ee6yI_PH36Y4bA" name="system.InteractionSubType" value="undefined" description="The origin sub-type of the interaction." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_HnTQVlt0Ee6yI_PH36Y4bA" name="system.SubmittedBy" value="_genesys.ixn.interactions[system.InteractionID].location.media_server" description="This is the originating media type of the interaction." type="System"/>
      <variables xmi:type="datatypes:Variable" xmi:id="_HnTQV1t0Ee6yI_PH36Y4bA" name="system.ExternalID" value="undefined" description="This is the ID of the interaction that has been assigned by the originating media server." type="System"/>
    </blocks>
    <blocks xmi:type="ird:ExitBlock" xmi:id="_6niNgNz6EeKyG9aF7VXEXg" name="Exit1" terminating="true" category="Exit"/>
    <blocks xmi:type="ird:PlayApplicationBlock" xmi:id="_IvSzIFt0Ee6yI_PH36Y4bA" name="PlayApplication1" category="Play Application" resource="Variable(system.DNIS)" type="Id"/>
    <links xmi:type="ird:WorkflowOutputLink" xmi:id="_JzCvIFt0Ee6yI_PH36Y4bA" fromBlock="_6e2LkNz6EeKyG9aF7VXEXg" toBlock="_IvSzIFt0Ee6yI_PH36Y4bA"/>
    <links xmi:type="ird:WorkflowOutputLink" xmi:id="_KFslYFt0Ee6yI_PH36Y4bA" fromBlock="_IvSzIFt0Ee6yI_PH36Y4bA" toBlock="_6niNgNz6EeKyG9aF7VXEXg"/>
    <namespaces xmi:type="datatypes:Property" xmi:id="_5WEloNz6EeKyG9aF7VXEXg" name="ws" value="http://www.genesyslab.com/modules/ws"/>
    <namespaces xmi:type="datatypes:Property" xmi:id="_5WElodz6EeKyG9aF7VXEXg" name="queue" value="http://www.genesyslab.com/modules/queue"/>
    <namespaces xmi:type="datatypes:Property" xmi:id="_5WElotz6EeKyG9aF7VXEXg" name="dialog" value="http://www.genesyslab.com/modules/dialog"/>
    <namespaces xmi:type="datatypes:Property" xmi:id="_5WElo9z6EeKyG9aF7VXEXg" name="session" value="http://www.genesyslab.com/modules/session"/>
    <namespaces xmi:type="datatypes:Property" xmi:id="_5WElpNz6EeKyG9aF7VXEXg" name="ixn" value="http://www.genesyslab.com/modules/interaction"/>
    <namespaces xmi:type="datatypes:Property" xmi:id="_5WElpdz6EeKyG9aF7VXEXg" name="classification" value="http://www.genesyslab.com/modules/classification"/>
  </ird:StrategyDiagram>
  <notation:Diagram xmi:id="_33D0EYoaEeG_nt9_QYQUcg" type="Ird" element="_33D0EIoaEeG_nt9_QYQUcg" name="default.workflow" measurementUnit="Pixel">
    <children xmi:type="notation:Shape" xmi:id="_6fiIENz6EeKyG9aF7VXEXg" type="1001" element="_6e2LkNz6EeKyG9aF7VXEXg">
      <children xmi:type="notation:DecorationNode" xmi:id="_6fj9QNz6EeKyG9aF7VXEXg" type="6003"/>
      <children xmi:type="notation:DecorationNode" xmi:id="_6fj9Qdz6EeKyG9aF7VXEXg" type="6001"/>
      <layoutConstraint xmi:type="notation:Bounds" xmi:id="_6fiIEdz6EeKyG9aF7VXEXg" x="400" y="100"/>
    </children>
    <children xmi:type="notation:Shape" xmi:id="_6nkCsNz6EeKyG9aF7VXEXg" type="1002" element="_6niNgNz6EeKyG9aF7VXEXg">
      <children xmi:type="notation:DecorationNode" xmi:id="_6nkCstz6EeKyG9aF7VXEXg" type="6002"/>
      <children xmi:type="notation:DecorationNode" xmi:id="_6nkCs9z6EeKyG9aF7VXEXg" type="4001"/>
      <layoutConstraint xmi:type="notation:Bounds" xmi:id="_6nkCsdz6EeKyG9aF7VXEXg" x="400" y="378"/>
    </children>
    <children xmi:type="notation:Shape" xmi:id="_IvSMEFt0Ee6yI_PH36Y4bA" type="1003" element="_IvSzIFt0Ee6yI_PH36Y4bA" fontName="Microsoft JhengHei UI">
      <children xmi:type="notation:DecorationNode" xmi:id="_IvSMEVt0Ee6yI_PH36Y4bA" type="4002"/>
      <children xmi:type="notation:DecorationNode" xmi:id="_IvSMElt0Ee6yI_PH36Y4bA" type="4003"/>
      <layoutConstraint xmi:type="notation:Bounds" xmi:id="_IvSME1t0Ee6yI_PH36Y4bA" x="400" y="252"/>
    </children>
    <styles xmi:type="notation:DiagramStyle" xmi:id="_33D0EooaEeG_nt9_QYQUcg"/>
    <edges xmi:type="notation:Connector" xmi:id="_JzFLYFt0Ee6yI_PH36Y4bA" type="3001" element="_JzCvIFt0Ee6yI_PH36Y4bA" source="_6fiIENz6EeKyG9aF7VXEXg" target="_IvSMEFt0Ee6yI_PH36Y4bA" roundedBendpointsRadius="10" routing="Rectilinear" closestDistance="true" lineColor="16711680">
      <children xmi:type="notation:DecorationNode" xmi:id="_JzFycFt0Ee6yI_PH36Y4bA" type="5001">
        <layoutConstraint xmi:type="notation:Location" xmi:id="_JzFycVt0Ee6yI_PH36Y4bA" x="5" y="5"/>
      </children>
      <styles xmi:type="notation:FontStyle" xmi:id="_JzFLYVt0Ee6yI_PH36Y4bA" fontName="Microsoft JhengHei UI"/>
      <bendpoints xmi:type="notation:RelativeBendpoints" xmi:id="_JzFLYlt0Ee6yI_PH36Y4bA" points="[0, 0, 0, -104]$[-1, 102, -1, -2]"/>
      <sourceAnchor xmi:type="notation:IdentityAnchor" xmi:id="_JzHnoFt0Ee6yI_PH36Y4bA" id="(0.4727272727272727,1.0)"/>
      <targetAnchor xmi:type="notation:IdentityAnchor" xmi:id="_JzIOsFt0Ee6yI_PH36Y4bA" id="(0.4727272727272727,0.04)"/>
    </edges>
    <edges xmi:type="notation:Connector" xmi:id="_KFtMcFt0Ee6yI_PH36Y4bA" type="3001" element="_KFslYFt0Ee6yI_PH36Y4bA" source="_IvSMEFt0Ee6yI_PH36Y4bA" target="_6nkCsNz6EeKyG9aF7VXEXg" roundedBendpointsRadius="10" routing="Rectilinear" closestDistance="true" lineColor="16711680">
      <children xmi:type="notation:DecorationNode" xmi:id="_KFtzgFt0Ee6yI_PH36Y4bA" type="5001">
        <layoutConstraint xmi:type="notation:Location" xmi:id="_KFtzgVt0Ee6yI_PH36Y4bA" x="5" y="5"/>
      </children>
      <styles xmi:type="notation:FontStyle" xmi:id="_KFtMcVt0Ee6yI_PH36Y4bA" fontName="Microsoft JhengHei UI"/>
      <bendpoints xmi:type="notation:RelativeBendpoints" xmi:id="_KFtMclt0Ee6yI_PH36Y4bA" points="[1, 2, 0, -84]$[0, 78, -1, -8]"/>
      <sourceAnchor xmi:type="notation:IdentityAnchor" xmi:id="_KFvBoFt0Ee6yI_PH36Y4bA" id="(0.4727272727272727,0.96)"/>
      <targetAnchor xmi:type="notation:IdentityAnchor" xmi:id="_KFvBoVt0Ee6yI_PH36Y4bA" id="(0.4818181818181818,0.16)"/>
    </edges>
  </notation:Diagram>
</xmi:XMI>
