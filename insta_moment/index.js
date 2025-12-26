const slidesData  = [
    {
        id: 1,
        imgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        content: 'A',
        child: [
            { id: 11,
                imgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                 content: 'AA' },
            { id: 12,
                imgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
                 content: 'AB' }
        ]
    },
    {
        id: 2,
        imgUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        content: 'B',
        child: [{ id: 21, content: 'BA' }, { id: 22, content: 'BB' },{ id: 22, content: 'BC' }]
    },
    { 
        id: 3,
        imgUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        content: 'C', 
        child: [
            { id: 31, content: 'CA' }, 
            { id: 32, content: 'CB' }
        ] 
    },
    { 
        id: 4,
        imgUrl: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        content: 'D', 
        child: [{ id: 41, content: 'DA' }, { id: 42, content: 'DB' }] },
    { 
        id: 5,
        imgUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
        content: 'E', 
        child: [
            { id: 51, content: 'EA' }, 
            { id: 52, content: 'EB' }
        ] 
    },
]

const slide = document.createElement('div');
slide.classList.add('slide');

const slidesContainer = document.querySelector('.slides');

slidesData.forEach(item => {
    const slideClone = slide.cloneNode(true);
    slideClone.style.background = `url('${item.imgUrl}') no-repeat center center/cover`;
    slidesContainer.appendChild(slideClone);
    slideClone.addEventListener('click', ()=>{
        window.location.href = './reels.html?id=' + item.id;    
    });
});


// let params = new URLSearchParams(window.location.search);
// let id = params.get('id');
// console.log(id);
// let res = slidesData.find(el=>el.id==id);
let res = slidesData.filter(el=>el.id==id)[0];
// res.child.forEach(item=>{
//     const slideClone = slide.cloneNode(true);
//     slideClone.style.background = `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80') no-repeat center center/cover`;
//     slidesContainer.appendChild(slideClone);
// });