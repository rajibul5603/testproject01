  var host = "http://123.49.47.23/edirectory/";
 
  $(document).on("change", "#office_type_id", function () {
     if ($("option:selected", this).attr("data-type") == "home") {
       if ($("option:selected", this).attr("data-id") == "ministry") {
         var ministry = $("option:selected", this).attr("data-id");
         console.log(ministry);

         var datadd= loadAllMinistry("all.ministry.php");

         $("#office_name").html(datadd);

         header_title_arr.push($(this).html());

         lastPage = "ministry";

         lastHeaderTitle = $(this).html();
       } else {
        var parent_domain = $(this).attr("data-domain");
         loadDivisionList("division.office.php", $(this).attr("data-domain")); 
       }
     }
  });


  function loadAllMinistry(fileName) {
    console.log(fileName);
    $.ajax({
      type: "POST",
      url: host + fileName,
      success: function (responseData) {
 
       console.log(responseData);
       $("#office_name").html(responseData);
            
 

       
        
        

        // $("#ministry-list li").on("click", function () {
        //   if ($(this).attr("data-type") == "ministry-list") {
        //     window.location.hash = "child-ministry";
        //     loadMinistryChild(
        //       "child.ministry.php",
        //       $(this).attr("data-id"),
        //       $(this).attr("data_domain")
        //     );
        //     $("#header2").find(".title").html($(this).html());
        //     header_title_arr.push($(this).html());
        //     lastPage = "child-ministry";
        //     lastHeaderTitle = $(this).html();
        //     lastDataId = $(this).attr("data-id");
        //     lastDomain = $(this).attr("data_domain");
        //   }
        // });
      },
    });
  }
 
