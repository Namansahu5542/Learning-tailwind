let btn = document.querySelector(".button");
let first = document.querySelector(".first");
let placeholder = document.querySelector(".plchldr")

let chname = document.querySelector(".channel-name")
let img = document.querySelector(".logo")
let views = document.querySelector(".views")
let length = document.querySelector(".length");
let comment = document.querySelector(".context");



console.log(placeholder);
let ar = ["Enter Thumbnail image", "Enter views", "Enter length of the video", "Enter Comment"];
// let ar = ['Enter channel name',
//     'Enter thumbnail image',
//     'Enter views',
//     'Enter length of the video',
//     'Enter comment'
// ];

let count = 0;

function addme(count) {
  
        switch (count) {


            case 0:
                first.textContent = ar[count];
                placeholder.placeholder = 'Enter link';

                let ch = placeholder.value;
                chname.textContent = `${ch}`;


                break;
            case 1:
                first.textContent = ar[count];
                placeholder.placeholder = 'ex. 12345M';

                let link = placeholder.value;
                img.style.backgroundImage = `url('${link}')`;
                img.style.backgroundSize = "cover";
                img.style.backgroundRepeat = "no-repeat";

                break;

            case 2:
                first.textContent = ar[count];
                placeholder.placeholder = 'ex. 10:20:30';


                let viewss = placeholder.value;
                views.textContent = `${viewss}`;

                break;
            case 3:
                first.textContent = ar[count];
                placeholder.placeholder = 'ex. Introduction to CSS Tailwind';
                let vl = placeholder.value;
                length.textContent = `${vl}`;
                break;
            case 4:
                first.textContent = ar[count];
                placeholder.placeholder = '';
                let cont = placeholder.value;
                comment.textContent = `${cont}`;
                break;

            default:
                first.textContent = "All prompts done!";
                placeholder.placeholder = 'YEAHHHHHHHH'
        }
    }

let click = 0;
let ip = document.querySelector(".input");
btn.addEventListener("click", () => {
    if (click == 0) {
        let input = document.createElement("input");
        input.type = "text";
        input.className = "plchldr w-64 px-4 py-2 border-3 border-yellow-600 rounded-2xl placeholder-gray-500";
        input.id = "myInput";
        btn.textContent = "Confirm";

        ip.appendChild(input);
        placeholder = input;

        // show first prompt immediately
        click++;
    } else {
        // increment first
        addme(count++);     // then call with updated count
        placeholder.value = "";
    }
});
