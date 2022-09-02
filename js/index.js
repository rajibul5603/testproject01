var host = "http://123.49.47.23/edirectory/";

$(document).on("change", "#office_type_id", function () {

  if ($("option:selected", this).attr("data-id") == "ministry") {
    $("#office_name_list").find("*").not("#nullValueOption").remove();
    $("#child_office_name_list").find("*").not("#nullValueOption").remove();
    $("#district_name").find("*").not("#nullValueOption").remove();
    $("#district_office_name").find("*").not("#nullValueOption").remove();
    $("#upazila_name").find("*").not("#nullValueOption").remove();
    $("#upazila_office_name").find("*").not("#nullValueOption").remove();
    $("#officer_list").find("*").not("#nullValueOption").remove();

    loadAllMinistry("all.ministry.php");
  } else if ($("option:selected", this).attr("data-id") == "division") {
      $("#office_name_list").find("*").not("#nullValueOption").remove();
      $("#child_office_name_list").find("*").not("#nullValueOption").remove();
      $("#district_name").find("*").not("#nullValueOption").remove();
      $("#district_office_name").find("*").not("#nullValueOption").remove();
      $("#upazila_name").find("*").not("#nullValueOption").remove();
      $("#upazila_office_name").find("*").not("#nullValueOption").remove();
      $("#officer_list").find("*").not("#nullValueOption").remove();

    loadDivisionNameList();
  } else {
    $("#office_name_list").find("*").not("#nullValueOption").remove();
    $("#child_office_name_list").find("*").not("#nullValueOption").remove();
    $("#district_name").find("*").not("#nullValueOption").remove();
    $("#district_office_name").find("*").not("#nullValueOption").remove();
    $("#upazila_name").find("*").not("#nullValueOption").remove();
    $("#upazila_office_name").find("*").not("#nullValueOption").remove();
    $("#officer_list").find("*").not("#nullValueOption").remove();

  }
});

$(document).on("change", "#office_name_list", function () {
  if ($("option:selected", this).attr("data-type") == "ministry-list") {
     $("#child_office_name_list").find("*").not("#nullValueOption").remove();
     $("#district_name").find("*").not("#nullValueOption").remove();
     $("#district_office_name").find("*").not("#nullValueOption").remove();
     $("#upazila_name").find("*").not("#nullValueOption").remove();
     $("#upazila_office_name").find("*").not("#nullValueOption").remove();
     $("#officer_list").find("*").not("#nullValueOption").remove();

    var ministry_child_id = $("option:selected", this).val();
    var domainName = $("option:selected", this).attr("data_domain");
    loadMinistryChild("child.ministry.php", ministry_child_id, domainName);
  } else if ($("option:selected", this).attr("data-type") == "divisional") {
     $("#child_office_name_list").find("*").not("#nullValueOption").remove();
     $("#district_name").find("*").not("#nullValueOption").remove();
     $("#district_office_name").find("*").not("#nullValueOption").remove();
     $("#upazila_name").find("*").not("#nullValueOption").remove();
     $("#upazila_office_name").find("*").not("#nullValueOption").remove();
     $("#officer_list").find("*").not("#nullValueOption").remove();

    var divisionDomain = $("option:selected", this).attr("data_domain");  
    loadDivisionOfficeList("division.office.php", divisionDomain);
    
  }
  else{
   
      $("#child_office_name_list").find("*").not("#nullValueOption").remove();
      $("#district_name").find("*").not("#nullValueOption").remove();
      $("#district_office_name").find("*").not("#nullValueOption").remove();
      $("#upazila_name").find("*").not("#nullValueOption").remove();
      $("#upazila_office_name").find("*").not("#nullValueOption").remove();
      $("#officer_list").find("*").not("#nullValueOption").remove();

  }
});

$(document).on("change", "#child_office_name_list", function () {
 // console.log("Ministry/Directorate/child  officer list  will shown in officer list option");
  // console.log(domainName);
  $('#district_name option[value=""]').prop("selected", true);

  if ($("option:selected", this).attr("data-type") == "ministry-child-list") {
     
       $("#district_name").find("*").not("#nullValueOption").remove();
       $("#district_office_name").find("*").not("#nullValueOption").remove();
       $("#upazila_name").find("*").not("#nullValueOption").remove();
       $("#upazila_office_name").find("*").not("#nullValueOption").remove();
       $("#officer_list").find("*").not("#nullValueOption").remove();


    var dataID = $("option:selected", this).val();
    var domain = $("option:selected", this).attr("data_domain");
    //$("option:selected", this).attr("data-id") == "ministry-child-list")
    loadEmployeesMinistryChild("employees.child.ministry.php", dataID, domain);

  } else if ($("option:selected", this).attr("data-type") == "division-office-list") {
     
      $("#district_name").find("*").not("#nullValueOption").remove();
      $("#district_office_name").find("*").not("#nullValueOption").remove();
      $("#upazila_name").find("*").not("#nullValueOption").remove();
      $("#upazila_office_name").find("*").not("#nullValueOption").remove();
      $("#officer_list").find("*").not("#nullValueOption").remove();


    var divisional_office_id = $("option:selected", this).val();
     var domainName = $("option:selected", this).attr("data_domain");
     loadDivisionOfficers("division.officers.list.php", domainName);
  }
  else
  {
      $("#district_name").find("*").not("#nullValueOption").remove();
      $("#district_office_name").find("*").not("#nullValueOption").remove();
      $("#upazila_name").find("*").not("#nullValueOption").remove();
      $("#upazila_office_name").find("*").not("#nullValueOption").remove();
      $("#officer_list").find("*").not("#nullValueOption").remove();
  }
  
});

 
$(document).on("change", "#district_name", function () {
  
  
      
      $("#district_office_name").find("*").not("#nullValueOption").remove();
      $("#upazila_name").find("*").not("#nullValueOption").remove();
      $("#upazila_office_name").find("*").not("#nullValueOption").remove();
      $("#officer_list").find("*").not("#nullValueOption").remove();
      
  var domainName = $("option:selected", this).attr("data_domain");
  loadDistrictOfficeList("district.office.php", domainName);
 
});

$(document).on("change", "#district_office_name", function () {
  
    
   
    $("#upazila_name").find("*").not("#nullValueOption").remove();
    $("#upazila_office_name").find("*").not("#nullValueOption").remove();
    $("#officer_list").find("*").not("#nullValueOption").remove();
      
  var domainName = $("option:selected", this).attr("data_domain");
  loadDistrictOfficers("district.officers.list.php", domainName);
  
});


$(document).on("change", "#upazila_name", function () {
   
    $("#upazila_office_name").find("*").not("#nullValueOption").remove();
    $("#officer_list").find("*").not("#nullValueOption").remove();
      
  var upazila_office_id = $("option:selected", this).val();
  var domainName = $("option:selected", this).attr("data_domain");
   loadUpazilaList("upazila.office.php", domainName);
});
$(document).on("change", "#upazila_office_name", function () {
  
  $("#officer_list").find("*").not("#nullValueOption").remove();

  var upNameid = $("option:selected", this).val();
  var domainName = $("option:selected", this).attr("data_domain");
  loadUpazilaOfficers("upazila.officers.list.php", domainName);
});

// end of ajax

// 1. Custom Function - load all Ministries function [মন্ত্রণালয় /বিভাগ ]
function loadAllMinistry(fileName) {
  $.ajax({
    type: "POST",
    url: host + fileName,
    beforeSend: function () {
       
      $("#office_name_list").find("*").not("#nullValueOption").remove();
      $("#officerList").find("*").not("#nullValueOption").remove();
    },
    success: function (responseData) {
      $("#Responselist").html(responseData);
      const liElements = document.querySelectorAll("li");

      liElements.forEach((link) => {
        const replacement = document.createElement("option");
        for (let i = 0; i < liElements.length; i++) {
          const textData = link.outerText;
          const data_domain = link.attributes.data_domain.value;
          const idData = link.dataset.id;
          const datatype = link.dataset.type;

          replacement.setAttribute("data-type", datatype);
          replacement.value = idData;
          replacement.setAttribute("data_domain", data_domain);
          replacement.text = textData;
        }
        $("#office_name_list").append(replacement.outerHTML);
        
      });
      $("#office_name_list").prepend("<option id='nullValueOption' value='' selected>নির্বাচন করুন</option>");
    },
     
  });
}

//2. Custom Function - Division NAME [মন্ত্রণালয় /বিভাগ]
function loadDivisionNameList() {
  
  replacementData = document.createElement("select");
  for (let i = 0; i <= 7; i++) {
    replacement = document.createElement("option");
    const division_domain = [
      "www.barisaldiv.gov.bd",
      "www.chittagongdiv.gov.bd",
      "www.dhakadiv.gov.bd",
      "www.khulnadiv.gov.bd",
      "www.rajshahidiv.gov.bd",
      "www.rangpurdiv.gov.bd",
      "www.mymensinghdiv.gov.bd",
      "www.sylhetdiv.gov.bd",
    ];
    const division_name = [
      "বরিশাল বিভাগ",
      "চট্টগ্রাম বিভাগ",
      "ঢাকা বিভাগ",
      "খুলনা বিভাগ",
      "রাজশাহী বিভাগ",
      "রংপুর বিভাগ",
      "ময়মনসিংহ বিভাগ",
      "সিলেট বিভাগ",
    ];

    replacement.setAttribute("data-type", "divisional");
    replacement.value = i + 1;  
    replacement.setAttribute("data_domain", division_domain[i]);
    replacement.text = division_name[i];
    replacementData.append(replacement);
    // console.log(replacement);
  }
  $("#office_name_list").find("*").not("#nullValueOption").remove();
  $("#officer_list").find("*").not("#nullValueOption").remove();
  console.log(replacementData.outerHTML);
  $("#office_name_list").html(replacementData.outerHTML);
  $("#office_name_list").prepend("<option value='' selected>নির্বাচন করুন</option>");
  // $("#Responselist").append(replacementData.outerHTML);
}

// 3. custom function - load specific Ministry offices [কার্যালয়/ বিভাগীয় কার্যালয়]
function loadMinistryChild(fileName, id, data_domain) {
  $.ajax({
    type: "POST",
    url: host + fileName + "?id=" + id + "&domain=" + data_domain,
    beforeSend:function()
    {
        $("#child_office_name_list").find("*").not("#nullValueOption").remove();
        $("#district_name").find("*").not("#nullValueOption").remove();
        $("#upazila_name").find("*").not("#nullValueOption").remove();
        $("#officer_list").find("*").not("#nullValueOption").remove();
              
    },
    success: function (responseData) {
      $("#Responselist").html(responseData);

      const liElements = document.querySelectorAll("li");
        liElements.forEach((liElement) => {
        var replacement = "";
        // copy attributes
        for (let i = 0; i < liElements.length; i++) {
          // console.log(liElement);
          if (liElement.dataset.type == "ministry-child-list") {
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
        //$("#Responselist").hide();
      });
      $("#child_office_name_list").prepend("<option value='' selected>নির্বাচন করুন</option>");
    },
  });
}

//3. custom function - load specific divisianl offices
// Load data on কার্যালয়/ বিভাগীয় কার্যালয় and জেলা select
function loadDivisionOfficeList(fileName, domain) {
  $.ajax({
    type: "POST",
    url: host + fileName + "?domain=" + domain,
    beforeSend: function () {
      
      $("#child_office_name_list").find("*").not("#nullValueOption").remove();
   
      $("#upazila_name").find("*").not("#nullValueOption").remove();
    },
    success: function (responseData) {
      $("#Responselist").html(responseData);
      const liElements = document.querySelectorAll("li");

      liElements.forEach((liElement) => {
        var lidivisionalOffice = "";
        var liDistrictOffice = "";
        for (let i = 0; i < liElements.length; i++) {
          if (liElement.dataset.type == "division-office-list") {
            lidivisionalOffice = document.createElement("option");
            const textData = liElement.outerText;
            const data_domain = liElement.dataset.domain;
            const idData = liElement.dataset.id;
            const datatype = liElement.dataset.type;
            lidivisionalOffice.setAttribute("data-type", datatype);
            lidivisionalOffice.value = idData;
            lidivisionalOffice.setAttribute("data_domain", data_domain);
            lidivisionalOffice.text = textData;
          } else if (liElement.dataset.type == "division-child-list") {
            liDistrictOffice = document.createElement("option");
            const textData = liElement.outerText;
            const data_domain = liElement.dataset.domain;
            const idData = liElement.dataset.id;
            const datatype = liElement.dataset.type;
            liDistrictOffice.setAttribute("data-type", datatype);
            liDistrictOffice.value = idData;
            liDistrictOffice.setAttribute("data_domain", data_domain);
            liDistrictOffice.text = textData;
          }

          // console.log(liDistrictOffice.outerHTML);
        }
        
        $("#child_office_name_list").append(lidivisionalOffice.outerHTML);
        $("#district_name").append(liDistrictOffice.outerHTML);
        $("#Responselist").show();
      });
      $("#child_office_name_list").prepend("<option value='' selected>নির্বাচন করুন</option>");
    },
  });
}
function loadDistrictOfficeList(fileName, domain) {
  $.ajax({
    type: "POST",
    url: host + fileName + "?domain=" + domain,
    beforeSend: function () {
      $("#upazila_name").find("*").not("#nullValueOption").remove();
    },
    success: function (responseData) {
      $("#Responselist").html(responseData);
      const liElements = document.querySelectorAll("li");

      liElements.forEach((liElement) => {
        var liDistrictOffice = "";
        var liUpazilaList = "";
        for (let i = 0; i < liElements.length; i++) {
          if (liElement.dataset.type == "district-office-list") {
            liDistrictOffice = document.createElement("option");
            const textData = liElement.outerText;
            const data_domain = liElement.dataset.domain;
            const idData = liElement.dataset.id;
            const datatype = liElement.dataset.type;
            liDistrictOffice.setAttribute("data-type", datatype);
            liDistrictOffice.value = idData;
            liDistrictOffice.setAttribute("data_domain", data_domain);
            liDistrictOffice.text = textData;
          } else if (liElement.dataset.type == "district-child-list") {
            liUpazilaList = document.createElement("option");
            const textData = liElement.outerText;
            const data_domain = liElement.dataset.domain;
            const idData = liElement.dataset.id;
            const datatype = liElement.dataset.type;
            liUpazilaList.setAttribute("data-type", datatype);
            liUpazilaList.value = idData;
            liUpazilaList.setAttribute("data_domain", data_domain);
            liUpazilaList.text = textData;
          }
        }
        $("#upazila_name").append(liUpazilaList.outerHTML);
        $("#district_office_name").append(liDistrictOffice.outerHTML);
        $("#Responselist").show();
      });
    },
  });
}

function loadUpazilaList(fileName, domain) {
  $.ajax({
    type: "POST",
    url: host + fileName + "?domain=" + domain,
    beforeSend: function () {
      $("#upazila_office_name").find("*").not("#nullValueOption").remove();
    },
    success: function (responseData) {
      $("#Responselist").html(responseData);
      const liElements = document.querySelectorAll("li");

      liElements.forEach((liElement) => {
        
        var liUpazilaOffice = "";
        for (let i = 0; i < liElements.length; i++) {
          if (liElement.dataset.type == "upazila-office-list") {
            liUpazilaOffice = document.createElement("option");
            const textData = liElement.outerText;
            const data_domain = liElement.dataset.domain;
            const idData = liElement.dataset.id;
            const datatype = liElement.dataset.type;
            liUpazilaOffice.setAttribute("data-type", datatype);
            liUpazilaOffice.value = idData;
            liUpazilaOffice.setAttribute("data_domain", data_domain);
            liUpazilaOffice.text = textData;
          }
        }
        $("#upazila_office_name").append(liUpazilaOffice.outerHTML);
        $("#Responselist").show();
      });
    },
  });
}

// officer list starts here

function loadDivisionOfficers(fileName, domain) {
  $.ajax({
    type: "POST",
    url: host + fileName + "?domain=" + domain,
    beforeSend: function () {
      //$("#district_name option").find(["value=''"]).setAttribute('selected','selected');
      $("#officer_list").find("*").not("#nullValueOption").remove();
      
    },
    success: function (responseData) {
      $("#Responselist").html(responseData);
      const liElements = document.querySelectorAll("li");
     // console.log(liElements);
      liElements.forEach((liElement) => {
        var liDivisionalOfficer = "";
        for (let i = 0; i < liElements.length; i++) {
          if (liElement.dataset.type == "division-officer-list") {
            liDivisionalOfficer = document.createElement("option");
            const textData = liElement.innerText.replace("\n", ",");
            const idData = liElement.dataset.id;
            const datatype = liElement.dataset.type;
            liDivisionalOfficer.setAttribute("data-type", datatype);
            liDivisionalOfficer.value = idData.concat("*").concat(domain);
            liDivisionalOfficer.setAttribute("data_domain", domain);
            liDivisionalOfficer.text = textData;
          }
          //console.log(liDivisionalOfficer.outerHTML);
        }
        
        $("#officer_list").append(liDivisionalOfficer.outerHTML);
      
        $("#Responselist").show();
      });
    },
  });
  
}

function loadEmployeesMinistryChild(fileName, id, data_domain) {
  $.ajax({
    type: "POST",
    url: host + fileName + "?id=" + id + "&domain=" + data_domain,
    beforeSend: function () {
      $("#officer_list").find("*").remove();
    },
    success: function (responseData) {
      $("#Responselist").html(responseData);
      const liElements = document.querySelectorAll("li");
     // console.log(liElements);
      liElements.forEach((liElement) => {
        var liMinistryOfficer = "";

        for (let i = 0; i < liElements.length; i++) {
          if (liElement.dataset.type == "ministry-child-employees-list") {
            liMinistryOfficer = document.createElement("option");
            const textData = liElement.innerText.replace("\n", ",");
          
            const idData = liElement.dataset.id;
            const datatype = liElement.dataset.type;
            liMinistryOfficer.setAttribute("data-type", datatype);

            liMinistryOfficer.value = idData.concat("*").concat(data_domain); 
            liMinistryOfficer.setAttribute("data_domain", data_domain);
            liMinistryOfficer.text = textData;
          }

          //console.log(liMinistryOfficer.outerHTML);
        }
        $("#officer_list").append(liMinistryOfficer.outerHTML);
        
        $("#Responselist").show();
      });
    },
    
  });
}

// load district officers list 
function loadDistrictOfficers(fileName, domain) {
 
  $.ajax({
    type: "POST",
    url: host + fileName + "?domain=" + domain,
    success: function (responseData) {
      $("#Responselist").html(responseData);
      const liElements = document.querySelectorAll("li");
     //console.log(liElements);
      liElements.forEach((liElement) => {
        var liDistrictOfficer = "";
        for (let i = 0; i < liElements.length; i++) {
          if (liElement.dataset.type == "district-officer-list") {
            liDistrictOfficer = document.createElement("option");
            const textData = liElement.innerText.replace("\n", ",");
            const idData = liElement.dataset.id;
            const datatype = liElement.dataset.type;
            liDistrictOfficer.setAttribute("data-type", datatype);
            liDistrictOfficer.value = idData.concat("*").concat(domain);
            liDistrictOfficer.setAttribute("data_domain", domain);
            liDistrictOfficer.text = textData;
          }

           
        }
        $("#officer_list").append(liDistrictOfficer.outerHTML);
        
        $("#Responselist").show();
      });
      $("#officer_list").prepend("<option value='' selected>নির্বাচন করুন</option>");
    },
  });
}

// load Upazila officers list 

 


function loadUpazilaOfficers(fileName,domain){
    $.ajax({
      type: "POST",
      url: host + fileName + "?domain=" + domain,
      success: function (responseData) {
        $("#Responselist").html(responseData);
        const liElements = document.querySelectorAll("li");
        //console.log(liElements);
        liElements.forEach((liElement) => {
          var liUpazilaOfficer = "";
          for (let i = 0; i < liElements.length; i++) {
            if (liElement.dataset.type == "upazila-officer-list") {
              liUpazilaOfficer = document.createElement("option");
              const textData = liElement.innerText.replace("\n", ",");
              const idData = liElement.dataset.id;
              const datatype = liElement.dataset.type;
              liUpazilaOfficer.setAttribute("data-type", datatype);
              liUpazilaOfficer.value = idData.concat("*").concat(domain);
              liUpazilaOfficer.setAttribute("data_domain", domain);
              liUpazilaOfficer.text = textData;
            }

            
          }
          $("#officer_list").append(liUpazilaOfficer.outerHTML);
          
          $("#Responselist").show();
        });
        $("#officer_list").prepend("<option value='' selected>নির্বাচন করুন</option>");
      },
    });
}



 
