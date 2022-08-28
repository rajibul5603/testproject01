var parent_domain;
var header_title_arr = new Array();
var lastPage = "",
  lastHeaderTitle = "",
  lastDataId = "",
  lastDomain = "",
  sel_photo_url = "";

var upazillaActiveTab = 0;
var districtActiveTab = 0;
var divisionActiveTab = 0;

  var base_url = window.location.origin;
  var host = "http://123.49.47.23/edirectory/";

  // let url = '{{url("/findDistrictName")}}';
 // let url = base_url + "/findDistrictName";
  //let districtUrl = url + "/" + division_id;
  //let output = "";
 
  $(document).on("change", "#office_type_id", function () {
    let office_type_id = $(this).val();
    // if (office_type_id == "") {
    //   office_type_id = 0;
    // }

    //console.log(office_type_id);
    
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
         parent_domain = $(this).attr("data-domain");
         loadDivisionList("division.office.php", $(this).attr("data-domain"));



         $("#header2").find(".title").html($(this).html());

         header_title_arr.push($(this).html());

         lastPage = "divisional";

         lastHeaderTitle = $(this).html();
         lastDomain = $(this).attr("data-domain");
       }
     }
    //getDistrict(office_type_id);
  });


  function loadAllMinistry(fileName) {
    console.log(fileName);
    $.ajax({
      type: "POST",
      url: host + fileName,
      beforeSend: function () {
        //$("body").find(".home-view").hide();
         
     
      },
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
 
