(function( window ) {
  "use strict";
  var document = window.document,
      fieldValueMap = {
            // basic stuff
            "f_name": "Sean",
            "l_name": "Aubin",
            "sup_name": "Chris Eliasmith",
            "student_id": "20378521",
            "email": "saubin@uwaterloo.ca",
            "area": "ODM - Optimization and decision making",
            "field": "Theoretical Neuroscience",
            "program": "Thesis MASc",
            "attendence": "Full-time", // this doesn't work for some reason
            "academic": "19",
            "month": "3",
            "year": "15",
            "cumulative": "6",
            "current_status": "Active",

            // funding
            "f_source": "OGS",
            "type": "Graduate",
            "s_type": "0",
            "description": "",
            "amount": "5000",
            "month_0_from": "September",
            "year_0_from": "2015",
            "month_0_to": "August",
            "year_0_to": "2016",

            "f_source_a": "UofW",
            "type_a": "President's",
            "s_type_a": "0",
            "description_a": "",
            "amount_a": "1666.66",
            "month_1_from": "September",
            "year_1_from": "2015",
            "month_1_to": "August",
            "year_1_to": "2017",

            "f_source_b": "NSERC",
            "type_b": "Graduate",
            "s_type_b": "0",
            "description_b": "",
            "amount_b": "5833.33",
            "month_2_from": "September",
            "year_2_from": "2016",
            "month_2_to": "August",
            "year_2_to": "2017",


            // course activities
            "term_1": "Fall-2015",
            "c_subject_1": "CogSci600",
            "c_title_1": "Seminar in Cognitive Science",
            "c_term_1": "Fall-2015",
            "grade_1": "98",

            "term_2": "Fall-2015",
            "c_subject_2": "STAT 946",
            "c_title_2": "Topics in Statistics",
            "c_term_2": "Fall-2015",
            "grade_2": "88",

            "term_3": "Winter-2016",
            "c_subject_3": "SYDE 750",
            "c_title_3": "Topics in System Modelling",
            "c_term_3": "Spring-2016",
            "grade_3": "1",

            "term_4": "Winter-2016",
            "c_subject_4": "SYDE 675",
            "c_title_4": "Pattern Recognition",
            "c_term_4": "",
            "grade_4": "1",

            // progress
            "level500": "0",
            "level600": "2",
            "level700": "1",
            "levelother": "1",
            "gradcourses": "0",
            "gradeinc": "2",
            "thesistopic": "Yes",

            // scholarly activities
            "a_term_1": "W2016",
            "a_term_description_1": "Paper accepted to CogSci Conference 2016. Won Computational Modeling Prize in Applied Cognition and Student Travel award",

            "a_term_2": "W2016",
            "a_term_description_2": "Tutorial paper accepted to Biologically Inspired Cognitive Architectures.",

            "a_term_3": "W2016",
            "a_term_description_3": "Accepted to Kavli Summer School.",

            "a_term_4": "S2016",
            "a_term_description_4": "Attended Kavli Summer School.",

            "a_term_5": "S2016",
            "a_term_description_5": "Attended CogSci2016 Conference",

            "a_term_6": "",
            "a_term_description_6": "",

            "a_term_7": "",
            "a_term_description_7": "",

            // plan for completion
            "b_term_1": "F2016",
            "b_term_description_1": "Finish last course requirement and Tower of Hanoi model.",

            "b_term_2": "W2017",
            "b_term_description_2": "Internship at Honda. Start Learning Version of Tower of Hanoi model.",

            "b_term_3": "S2017",
            "b_term_description_3": "Internship at Honda. Finish Learning Version of Tower of Hanoi model.",

            "b_term_4": "F2017",
            "b_term_description_4": "Give Seminar. Refine model.",

            "b_term_5": "W2018",
            "b_term_description_5": "Write first draft of thesis. Stretch goal: add memory to Tower of Hanoi model.",

            "b_term_6": "S2018",
            "b_term_description_6": "Finish and defend master's thesis.",

            "b_term_7": "",
            "b_term_description_7": "",

            // comments
            "comments": "Spring semester was mostly spent managing health problems and travelling. Now that health probelms are resolved, productivity has increased considerably.",


      };

    Object.keys( fieldValueMap ).forEach(function( name ){

        var input = document.querySelector( "form input[name='" + name + "']" )
                        || document.querySelector( "form select[name='" + name + "']" )
            || document.querySelector( "form textarea[name='" + name + "']" );

        input && input.type !== "hidden" && ( input.value = fieldValueMap[ name ] );
    });

})( window );
