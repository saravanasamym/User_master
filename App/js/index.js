// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setLeft("14.166666666666666em")
                .setTop("6.666666666666667em")
                .setWidth("18em")
                .setHeight("2.5em")
                .setLabelSize("8em")
                .setLabelCaption("User Name")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput13")
                .setDirtyMark(false)
                .setLeft("14.166666666666666em")
                .setTop("10.833333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Start Date")
                .setType("datetime")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput18")
                .setDirtyMark(false)
                .setLeft("38.333333333333336em")
                .setTop("10.833333333333334em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("End date")
                .setType("datetime")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput22")
                .setDirtyMark(false)
                .setLeft("12.5em")
                .setTop("18.333333333333332em")
                .setWidth("30.5em")
                .setLabelSize("8em")
                .setLabelCaption("Employee Name")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button7")
                .setDirtyMark(false)
                .setLeft("18.333333333333332em")
                .setTop("25.833333333333332em")
                .setWidth("8.75em")
                .setHeight("3.6666666666666665em")
                .setCaption("Save")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});