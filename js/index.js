  var host = "http://123.49.47.23/edirectory/";
 
  $(document).on("change", "#office_type_id", function () {
     if ($("option:selected", this).attr("data-type") == "home") {
       if ($("option:selected", this).attr("data-id") == "ministry") {
         var ministry = $("option:selected", this).attr("data-id");
         //console.log(ministry);
         loadAllMinistry("all.ministry.php");
       } else {
        var parent_domain = $(this).attr("data-domain");
         loadDivisionList("division.office.php", $(this).attr("data-domain")); 
       }
     }
  });






  // load all Ministries function
  function loadAllMinistry(fileName) {
    console.log(fileName);
    $.ajax({
      type: "POST",
      url: host + fileName,
      success: function (responseData) {
             // gatherData(responseData);
     //  console.log(responseData);
      $("#Responselist").html(responseData);
      //   var len = 0;         
        const liElements = document.querySelectorAll("li"); //58
        //console.log(liElements);

        liElements.forEach((link) => {
          const replacement = document.createElement("option");

          console.log(link.outerHTML);
          //console.log(link.attributes.id.value);
          console.log(link.attributes.data_domain.value); // it will append after value attr.
          console.log(link.outerText); // it will be option text
          //console.log(link.dataset.id); // it will be option value

          // copy attributes
          for (let i = 0; i < links.length; i++) {
            //48
            const textData = link.outerText; 
            const data_domain = link.attributes.data_domain.value;
            const idData = link.dataset.id; 

            replacement.value = idData;  //option > .... </
            replacement.text = textData;
            replacement.setAttribute("data_domain", data_domain);
          }

          console.log(replacement.outerHTML );
          $("#office_name_list").append(replacement.outerHTML);
        });}
    });
  }
  
