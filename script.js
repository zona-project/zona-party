const form =
document.getElementById("eventForm");


form.addEventListener(
"submit",
function(event) {

    event.preventDefault();


    const name =
    document
    .getElementById("name")
    .value
    .trim();


    const phone =
    document
    .getElementById("phone")
    .value
    .trim();


    let instagram =
    document
    .getElementById("instagram")
    .value
    .trim();


    const genderElement =
    document.querySelector(
        'input[name="gender"]:checked'
    );


    if (!genderElement) {

        alert(
            "性別を選択してください。"
        );

        return;

    }


    /* Instagram IDの@を自動追加 */

    if (
        instagram &&
        !instagram.startsWith("@")
    ) {

        instagram =
        "@" + instagram;

    }


    sessionStorage.setItem(
        "name",
        name
    );


    sessionStorage.setItem(
        "phone",
        phone
    );


    sessionStorage.setItem(
        "instagram",
        instagram
    );


    sessionStorage.setItem(
        "gender",
        genderElement.value
    );


    window.location.href =
    "./payment.html";

});