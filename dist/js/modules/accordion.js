const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll(itemsSelector);

	//blocks.forEach(block => {
	//	block.classList.add('animated', 'fadeInDown');
	//});

	//btns.forEach(btn => {
	//    btn.addEventListener('click', function() {
	//        if (!this.classList.contains('edu22-box-open')) {
    //	        	btns.forEach(btn => {
    //	            	btn.classList.remove('edu22-box-open', 'edu22-container-inner edu22-opened');
	//            });
	//            this.classList.add('edu22-box-open', 'edu22-container-inner edu22-opened');
	//        }
	//    });
	//});

    //blocks.forEach(block => {
    //    block.classList.add('animate__animated', 'animate__fedeInDown');
    //});


    //this.classList.toggle('opened');
    //this.nextElementSibling.classList.toggle('show');



    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('opened')) {
                btns.forEach(btn => {
                    btn.classList.remove('opened');
                });
                this.classList.add('opened');
            } 
        });
    });

    blocks.forEach(block => {
        block.addEventListener('click', function() {
            if (!this.classList.contains('show')) {
                blocks.forEach(block => {
                    block.classList.remove('show');
                });
                this.classList.add('show');
            } 
        });
    });




    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;