//tabbed content

class Tabs{
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }

    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }

    toggleTabs(e){
        //remove active classes from all
        this.tabs.forEach(tab => tab.classList.remove('active'));

        //add active class to clicked tab
        e.target.classList.add('active');
    }

    toggleContent(e){
        //remove active classes from all
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });

        //add active class to clicked tab
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

//Tabbed Content

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();