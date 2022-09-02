<!DOCTYPE html>
<html>

<head>

    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/index.js"></script>

</head>

<body>
    <div class=" container">
        <h2>Form control: select</h2>
        <p>The form below contains two dropdown menus (select lists):</p>
        <form id="main-body" action="/action_page.php">
            <div class="form-group">
                <label for="sel1">অফিসের ধরণ:</label>
                <select class="form-control" id="office_type_id" name="office_type_id">
                    <option id="nullValueOption" data-type="" data-id="" value="">নির্বাচন করুন</option>
                    <option data-type=" home" data-id="ministry" value="0">মন্ত্রণালয়</option>
                    <option data-type="home" data-id="division" value="0">বিভাগীয় কার্যালয়</option>
                </select>
            </div>

            <div id="office_name" name="office_name" class=" form-group">
                <label for="office">মন্ত্রণালয় /বিভাগ </label>
                <select class="form-control" name="office_name_list" id="office_name_list">
                    <!-- <option id="nullValueOption" value="">নির্বাচন করুন</option> -->
                </select>
            </div>

            <div id="child_office_name" name="child_office_name" class=" form-group">
                <label for="child_office_name_list">কার্যালয়/ বিভাগীয় কার্যালয়</label>
                <select class="form-control" name="child_office_name_list" id="child_office_name_list">
                    <!-- <option id="nullValueOption" value="">নির্বাচন করুন</option> -->
                </select>
            </div>

            <div id="dist_name" name="dist_name" class=" form-group">
                <label for="district_name">জেলা </label>
                <select class="form-control" name="district_name" id="district_name">
                    <option id="nullValueOption" value="">নির্বাচন করুন</option>
                </select>
            </div>
            <div id="dist_office_name" name="dist_office_name" class="form-group">
                <label for="district_office_name">জেলার কার্যালয় </label>
                <select class="form-control" name="district_office_name" id="district_office_name">
                    <option id="nullValueOption" value="">নির্বাচন করুন</option>
                </select>
            </div>
            <div id="upaz_name" name="upaz_name" class="form-group">
                <label for="upazila_name">উপজেলা </label>
                <select class="form-control" name="upazila_name" id="upazila_name">
                    <option id="nullValueOption" value="">নির্বাচন করুন</option>
                </select>
            </div>
            <div id="upazila_off_name" name="upazila_off_name" class="form-group">
                <label for="upazila_office_name">উপজেলার কার্যালয় </label>
                <select class="form-control" name="upazila_office_name" id="upazila_office_name">
                    <option id="nullValueOption" value="">নির্বাচন করুন</option>
                </select>
            </div>

            <div id="officer" name="officer" class=" form-group">
                <label for="officer_list">কর্মকর্তার নাম ও পদবি </label>
                <select class="form-control" name="officer_list" id="officer_list">
                    <option id="nullValueOption" value="">নির্বাচন করুন</option>
                </select>
            </div>



        </form>
    </div>

    <div id="Responselist" class="Responselist"></div>

</body>

</html>