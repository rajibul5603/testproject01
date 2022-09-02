  var host = "http://123.49.47.23/edirectory/";
 
  $(document).on("change", "#office_type_id", function () {

     if ($("option:selected", this).attr("data-type") == "home") {
       if ($("option:selected", this).attr("data-id") == "ministry") {
         $("#office_name_list").find("*").not("#nullValueOption").remove();
         var ministry = $("option:selected", this).attr("data-id");
         console.log(ministry);
         loadAllMinistry("all.ministry.php");
         
         
       }
     }
     else if ($("option:selected", this).attr("data-type") == "divisional") {
      if ($("option:selected", this).attr("data-id") <=8 ){
        $("#office_name_list").find("*").not("#nullValueOption").remove();
         var divisionID = $("option:selected", this).attr("data-id");
         var divisionDomain = $("option:selected", this).attr("data-domain");
    
         loadDivisionList("division.office.php", divisionDomain);
         
      }
      }
      else {
         $("#office_name_list").find("*").not("#nullValueOption").remove();
          
       }
});

$(document).on("change", "#office_name_list", function () {

   if ($("option:selected", this).attr("data-type") == "ministry-list") {
    //employees.child.ministry.php;
    $("#child_office_name_list").find("*").not("#nullValueOption").remove();
    var ministry_child_id = $("option:selected", this).val();
    var domainName = $("option:selected", this).attr("data_domain");
    console.log('Ministry/Directorate/child  officer list  will shown in officer list option');
    loadMinistryChild("child.ministry.php", ministry_child_id, domainName);
    
   }
   else if($("option:selected", this).attr("data-type") == "division-office-list")
   {
     // $("#district_office_name_list").find("*").not("#nullValueOption").remove();
     //division.office.php?domain= 
     
     console.log("Divisional officer will shown in officer list option ");
   }
    else if ($("option:selected", this).attr("data-type") == "division-child-list"){
       //var district_office_name_list = $("option:selected", this).attr("data-id");
       //console.log("Upzila option will fill");
     
      var division_child_id = $("option:selected", this).val();
      var domainName = $("option:selected", this).attr("data_domain");
      loadDistrictList("district.office.php", domainName);
      

    }
    else{
      $("#officer_list").find("*").not("#nullValueOption").remove();
    }
   
  });
// end of ajax

 // Custom Function - load all Ministries function
  function loadAllMinistry(fileName) {
    console.log(fileName);
    $.ajax({
      type: "POST",
      url: host + fileName,
      beforeSend: function(){
        $("#Responselist").hide();
      },
      success: function (responseData) {
        //  console.log(responseData);
         
        $("#Responselist").html(responseData);
        //   var len = 0;
        const liElements = document.querySelectorAll("li"); //58
        console.log(liElements);
        liElements.forEach((link) => {
          const replacement = document.createElement("option");
               // copy attributes
          for (let i = 0; i < liElements.length; i++) {
            //48
            const textData = link.outerText;
            const data_domain = link.attributes.data_domain.value;
            const idData = link.dataset.id;
            const datatype = link.dataset.type;

            replacement.setAttribute("data-type", datatype);
            replacement.value = idData; //option > .... </
            replacement.setAttribute("data_domain", data_domain);
            replacement.text = textData;
          }
          //console.log(replacement.outerHTML);
          $("#office_name_list").append(replacement.outerHTML);
         // $("#Responselist").remove();
        
        });

    }
  });
  
  }
  
  // custom function - load specific divisianl offices
function loadDivisionList(fileName, domain) {
  $.ajax({
    type: "POST",
    url: host + fileName + "?domain=" + domain,
      success: function (responseData) {
        // console.log(responseData);
       $("#Responselist").html(responseData);
        const liElements = document.querySelectorAll("li"); 
        console.log(liElements);
        
        liElements.forEach((liElement) => {
           var replacement = "";
               // copy attributes
          for (let i = 0; i < liElements.length; i++) {
           // console.log(liElement.outerText);
              if (liElement.dataset.type == "division-office-list" ||liElement.dataset.type == "division-child-list") {
                 replacement = document.createElement("option");
                const textData = liElement.outerText;
                const data_domain = liElement.dataset.domain;
                const idData = liElement.dataset.id;
                const datatype = liElement.dataset.type;

                replacement.setAttribute("data-type", datatype);
                replacement.value = idData; //option > .... </
                replacement.setAttribute("data_domain", data_domain);
                replacement.text = textData;
              }           
          }
          //console.log(replacement.outerHTML);
          $("#office_name_list").append(replacement.outerHTML);
          $("#Responselist").hide();
          
        });

      }, 
  });
}

 function loadMinistryChild(fileName,id,data_domain){
    $.ajax({
        type: 'POST',
        url: host+fileName+'?id='+id+'&domain='+data_domain,
    
        success: function (responseData) {
           
          $("#Responselist").html(responseData);

        const liElements = document.querySelectorAll("li"); 
        console.log(liElements);
        
        liElements.forEach((liElement) => {
           var replacement = "";
               // copy attributes
          for (let i = 0; i < liElements.length; i++) {
           // console.log(liElement);
              if (liElement.dataset.type == "ministry-child-list" ) {
                 replacement = document.createElement("option");
                const textData = liElement.outerText;
                const data_domain = liElement.attributes.data_domain.nodeValue;
                const idData = liElement.dataset.id;
                const datatype = liElement.dataset.type;

                replacement.setAttribute("data-type", datatype);
                replacement.value = idData; //option > .... </
                replacement.setAttribute("data_domain", data_domain);
                replacement.text = textData;
              }           
          }
          //console.log(replacement.outerHTML);
          $("#child_office_name_list").append(replacement.outerHTML);
          $("#Responselist").hide();
          
        });
      },
             
      
    });
}

function loadDistrictList(fileName, domain) {
  $.ajax({
    type: "POST",
    url: host + fileName + "?domain=" + domain,
    success: function (responseData) {
      $("#Responselist").html(responseData);

      const liElements = document.querySelectorAll("li");
      console.log(liElements);

      liElements.forEach((liElement) => {
        var replacement = "";
        // copy attributes
        for (let i = 0; i < liElements.length; i++) {
           
          if (liElement.dataset.type == "district-office-list" || liElement.dataset.type == "district-child-list") {
            console.log(liElement);
            replacement = document.createElement("option");
            const textData = liElement.outerText;
            const data_domain = liElement.attributes.data_domain;
            const idData = liElement.dataset.id;
            const datatype = liElement.dataset.type;

            replacement.setAttribute("data-type", datatype);
            replacement.value = idData; //option > .... </
            replacement.setAttribute("data_domain", data_domain);
            replacement.text = textData;
          }
        }
        //console.log(replacement.outerHTML);
        $("#child_office_name_list").append(replacement.outerHTML);
        $("#Responselist").hide();
      });
    },
  });
}
