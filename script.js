function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
loco()

function feturedProjectAnim() {
    let cont = document.querySelector(".feturedProjectContainer")
    let FPIMG = document.querySelector(".feturedProjectImgs")
    let FP1 = document.getElementById("feturedProjects1")
    cont.addEventListener("mouseenter", () => {
        FPIMG.style.display = "block"
    })
    cont.addEventListener("mouseleave", () => {
        FPIMG.style.display = "none"
    })

    let FPS = document.querySelectorAll(".feturedProjects")

    for (let i = 0; i < FPS.length; i++) {
        FPS[i].addEventListener("mouseenter", () => {
            let src = FPS[i].getAttribute("data-media")
            FPIMG.style.backgroundImage = `url(${src})`
        })
    }
}
feturedProjectAnim()

function page4Anim() {
    let firsth1 = document.getElementById("firsth1")
    let secondH1 = document.getElementById("secondh1")
    let thirdH1 = document.getElementById("thirdh1")
    let img = document.querySelector(".projectContainerRight").firstElementChild
    let p = document.querySelector(".projectContainerLeftBottom").firstElementChild


    firsth1.addEventListener("click", () => {
        firsth1.style.color = "white"
        secondH1.style.color = "#5A5653"
        thirdH1.style.color = "#5A5653"
        img.src = "Assets/design-img.webp"
        p.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. Wecreate a final design that encompasses the brand narrative to bring stories to life andprovide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings"
    })


    secondH1.addEventListener("click", () => {
        secondH1.style.color = "white"
        img.src = "Assets/projectimg.webp"
        firsth1.style.color = "#5A5653"
        thirdH1.style.color = "#5A5653"
        p.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    })

    thirdH1.addEventListener("click", () => {
        thirdH1.style.color = "white"
        img.src = "Assets/Executionimg.webp"
        firsth1.style.color = "#5A5653"
        secondH1.style.color = "#5A5653"
        p.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    })
}
page4Anim()
