

function UpdateTooltip(element, pageID, shapeID) {
    if (isUpLevel) {
        var strHL, strProps;

        if (frmDrawing.event.type == "focus") {
            strHL = strFocusHLTooltipText;
            strProps = strFocusPropsTooltipText;
        }
        else {
            strHL = strHLTooltipText;
            strProps = strPropsTooltipText;
        }

        var strTooltip = "";
        if (element.origTitle) {
            strTooltip = element.origTitle.toString();
        }

        var shapeNode = FindShapeXML(pageID, shapeID);

        if (shapeNode != null) {
            var propColl = SelectNodes(shapeNode, "Prop");
            if (propColl != null && propColl.length > 0) {
                if (strTooltip.length > 0) {
                    strTooltip += "\n";
                }
                strTooltip += strProps;
            }
        }

        var hlObj = GetHLAction(shapeNode, pageID, shapeID);
        if (hlObj != null && (hlObj.DoFunction.length > 0 || hlObj.Hyperlink.length > 0)) {
            if (strTooltip.length > 0) {
                strTooltip += "\n";
            }
            strTooltip += strHL;
        }

        element.title = strTooltip;
        if (element.alt != null) {
            element.alt = strTooltip;
        }
    }
}
