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
                    <option data-type="" data-id="" value="">নির্বাচন করুন</option>
                    <option data-type="home" data-id="ministry" value="0">সকল মন্ত্রণালয়</option>
                    <option data-type="divisional" data-id="1" data-domain="www.barisaldiv.gov.bd" value="1">বরিশাল বিভাগ</option>
                    <option data-type="divisional" data-id="2" data-domain="www.chittagongdiv.gov.bd" value="2">চট্টগ্রাম বিভাগ</option>
                    <option data-type="divisional" data-id="3" data-domain="www.dhakadiv.gov.bd" value="3">ঢাকা বিভাগ</option>
                    <option data-type="divisional" data-id="4" data-domain="www.khulnadiv.gov.bd" value="4">খুলনা বিভাগ</option>
                    <option data-type="divisional" data-id="5" data-domain="www.rajshahidiv.gov.bd" value="5">রাজশাহী বিভাগ</option>
                    <option data-type="divisional" data-id="6" data-domain="www.rangpurdiv.gov.bd" value="6">রংপুর বিভাগ</option>
                    <option data-type="divisional" data-id="7" data-domain="www.sylhetdiv.gov.bd" value="7">সিলেট বিভাগ</option>
                    <option data-type="divisional" data-id="8" data-domain="www.mymensinghdiv.gov.bd" value="8">ময়মনসিংহ বিভাগ</option>
                </select>
            </div>

            <div id="office_name" name="office_name" class=" form-group">

                <select class="form-control" name="office_name_list" id="office_name_list">
                    <option value="">Select One</option>
                </select>
            </div>


            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

    <div id="Responselist" class="Responselist"></div>

</body>

</html>