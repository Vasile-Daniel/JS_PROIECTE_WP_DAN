const menu = [
    {
        id: 1,
        title: "Dr Martin Dunbar",
        img: "./Martin_Dunbar.jpeg",
        edu: "BSc (Hons), PhD, D.Clin.Psychol.", 
        date: "23 August 2018", 
        role: "Chair", 
        desc: "Martin is a clinical psychologist by training and for over twenty years worked in Glasgow's NHS pain service, latterly as the clinical lead for the Glasgow pain management programme (GPMP). The GPMP provided people who live with pain the skills to better self-manage their difficulties and this is something that Martin is very passionate about. At the heart of self-management is an improved understanding of chronic pain and all the various options for help, and the work of Pain Concern is a massive help in improving this. ", 
    }, 
        {
        id: 2,
        title: "John Finch",
        img: "./John_Finch.jpeg",
        edu: "BVM&S MSc DLAS FRCPath MRCVS", 
        date: "23 August 2018", 
        role: "Hon. Treasurer",
        desc: "Born August 1954, John was a Veterinary Surgeon who has worked in general practice, tropical disease investigation (in Yemen), toxicological pathology (supporting drug safety evaluation) and laboratory animal welfare. John is currently a member of the management team at the Edinburgh site of Charles River Laboratories, where they help clients develop new medicines and agricultural products. John chairs the committee running Haddington Concert Society a concert promoting society running professional classical music concerts in Haddington, East Lothian.", 
    }, 
        {
        id: 3,
        title: "Dr. Sue Peacock",
        img: "./SuePeacock.jpeg",
         edu: "BSc (Hons) Physio, PG Cert Pain, Dip Ortho Med, Dip Mgmt, MCSP, Council Member of British Pain Society", 
        date: "23 August 2018", 
        role: "Trustee",
        desc: "Born June 1971. Sue Peacock is a Consultant Health Psychologist, registered with HCPC. She has over twenty years experience of working with people with chronic/persistent pain. Sue set up the psychological side of the Pain Clinic at Milton Keynes University Hospital and a support group which thrives 15 years later. For the past 3 years, Sue has worked in independent practice. She has published her research around pain and has written three books for people with chronic/persistent pain. Sue is a member of many professional bodies including The British Pain Society, in the past she has been secretary for the Pain Management Programme Special Interest Group and is currently secretary for the Primary and Community Care Special Interest Group.", 
    }, 
        {
        id: 4,
        title: "Michael Serpell",
        img: "./Michael_Serpell.png",
         edu: "", 
        date: "7 November 2019", 
        role: "",
        desc: "Born December 1959. Mick Serpell is a Consultant in Anaesthesia & Pain Medicine for Greater Glasgow & Clyde NHS, and Senior Lecturer at Glasgow University. He is Series Editor for Anaesthesia & Intensive Care Medicine, is Associate Editor for Pain Management, sits on the Advisory Board for European Journal of Pain, and reviews articles for several other pain related Journals. He is examiner for the FFPMRCA for the Royal College of Anaesthetists. He has received honoraria from Astellas, Grünenthal, NAPP and Pfizer for speaking at meetings. His institution has received research support in the past 5 years from numerous commercial sponsored studies.", 
    }, 


        {
        id: 5,
        title: "Robin Aitchison",
        img: "./logo.png",
         edu: "", 
        date: "12 April 2019", 
        role: "Trustee",
        desc: "Born in June 1957. Works as a Tax Partner for Ernst and Young", 
    }, 
        {
        id: 6,
        title: "Cathy Price",
        img: "./Cathy-Price.jpg",
         edu: "MB BCH, DCH, FRCA, FFPMRCA", 
        date: "01 July 2021", 
        role: "",
        desc: "Cathy is a consultant in Pain Medicine in Southampton and has worked there since 1999. She provides medical services for people with long term pain. To do this she works in a multidisciplinary pain clinic, provides theatre lists for nerve blocks and also covers inpatient wards. Cathy is also a Clinical Director for Solent NHS Trust for a variety of differing services including general practice and musculoskeletal services. She undertakes research into several aspects of pain management, including the effectiveness of nerve blocks, employment issues and pain and developing pain registries. Cathy also leads a National Pain Audit for four years and won a Medical Futures award for Innovation in 2005 and was made an Honorary Member of the British Pain Society in 2014.", 
    }, 
        {
        id: 7,
        title: "Iain Weir",
        img: "./ian-weir.png",
         edu: "", 
        date: "7 November 2019", 
        role: "Trustee",
        desc: "", 
    }, 
        {
        id: 8,
        title: "Richard Pell",
        img: "./RichardPell1.jpg",
         edu: "BSc(Hons) PGCert. MCSP", 
        date: "7 November 2019", 
        role: "Trustee",
        desc: "Richard is a physiotherapist by professional background and worked in community musculoskeletal (MSK), occupational health and pain management services for 10 years. He is now Head of NHS Service Development for Connect Health, the largest independent provider of community MSK, pain management and rheumatology services to the NHS in England. In addition Richard is Campaign Director for Flippin’ PainTM (www.flippinpain.co.uk), a public health campaign focused on engaging, educating and empowering communities towards a contemporary understanding of pain science and management.", 
    }, 

]

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = menu.map(function (item) {
        console.log(item); 
        return `<article class = "menu-item">
                <img src=${item.img} class = "photo" alt="">
                <div class = "item-info">
                    <h4> ${item.title} </h4>
                    <p class = "item-text"> ${item.edu} </p>
                    <p class = "item-text"> <b>Trustee since </b> ${item.date} </p>
                    <p class = "item-text"> <b> Role </b> ${item.role} </p>
                </div>
            </article>    
        `;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu; 
})

