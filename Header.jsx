import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary flex-sm-nowrap flex-wrap">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAZNz///8AV9oAYNsAU9kAXNva4/hnkeSetu3p8PsAYdwAXttHfuFzmeYAVdqXsesAWdr0+P3H1/Uwdd9/pOne6PmqwvCvxfCgu+6HpunC0/Qfbt4Pad1SiONLg+JcjeSMreu6zfJ5nucqc9/R3vfu9Pw8e+Btl+bj7fsTQ4c7AAAEyUlEQVR4nO2d627qOhBGYxPDxoEQril3Sgv0/Z/wBLFVHekcT9Li8WDrW/8tZcnOeMaXJMsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdWe6aqjCmslfb6xl6Xfa98zt5Xk/NhV+rGU9rujh0pJvr1Yl5W8pZ8hnemm8WuNLKSvIZ3lpNtWSRt2NBfmEqsI4MYNqy2WsgxlKFSm3kp4hjOUKnZh07cUKnamsQNlVoHH6qhDdVyXiVuqNQkbDcKGKr+LmQGIGGo1DFgUJUxbEZq6oZqEyzFkTJUy1B1lZihGma9xA3VZRdEUdBQTXchBqqkobpkARRFDdVXgERc1lD1+edFYUNVsytKG6o1d6khbqhG3HOGzX1SmN1ocKr7PzCchi/7n8PanjG6HE06W87CZeE+sabMJsNuiufYevEbk+8/OymGmPiZ6JWjLoM10nH6wJaDabviUXJj42kKvWo1HMbciQ1636q4jjbYPCiyZZti5IZNWrFpMZzErpjlbS9j9IZZ+UYbnhJQrEnDqcTOm2fyGak4jnpOfKDJPDVAuc+O3ZKdOI83O/3GnCnDt/hjTcureElgmDZVEtWJhwSGaWYmhOEqhWGalUQtFXuF8cAsiE7cpjBMyU5cJDDp02/ie4CDKL1n6TDO3IYB5ouPwbMcsrYTs5qYE9kFCzLn6MjwbUsOtuLmbnvkXuEvxh4MG+qCelLjbshe6fsyVNMr8ajavUzMHmq8GTYZmDvwE9F0yV0GezQkZu+ee3Fxyh1MfRp+uR/WultFNEqpRd7y4mz0wZy3eTW8ON8pItRwF1BeDd2TW/X+8zYvaVi7hqlxL51yL7j5Ney7hqk5OdusozJ0hn6zTt4w/T5MxdCZgiVj6EyjiVh6jsrQGfmJ+XAQlaEzayOq/KhyGvc2ROneg+LenfFpSBzII4p87uVEn4Z758Pag7tVHo/hwl3pEZNFRDX+mHhUItBsYqmAl3NqzUy7G7Jvkvox/ByQVyh7R3fTG3eksaO3P09yOlpNPyYx3wfYfLLmaVqL9MotyL7UFoSC2ECcBb4EzUP+5TZM4ORX04UDt6C6prAHnBMnTZN4Dcn5KMQWMDuaOtbOvnsYAPpQewLnLwuiqkhjkBry6sUh/kGak3eEEjgR1XLSO/7pXlPnvRT/AgY7FXHI5M4q9jij247qBPn6ACOle23mQR13F9qcvmsRfReaXevFrqjfQlt2WP2JOZBW2w53gRfxzoWmaL9AqtQy1nSmp7OWC2t/ifO2TM/k+7ZrlX/5E12YsYXR+lh3uMMtPEaL8lfk2WGx+smHMcTuIBTry/AXdO25b8ZicZS8wOMP/k/wCBtK3qsMYniR/KJ5EEPRm04hDK+i+WgAw4NsOspvuBfOt9kNR9IFBbPhdC5eE/IaDsN82lPOcCb3r4QwhgE/lEzAZzjdv8Y+GpvhrCceYx5wGY5fYoTe4TF8F/j/gwsOw+XhZTow4zAc3kr5SfBf+DYcnkV/ivQ/+DXs317Nz69hfX09P4+Gm1v1Cjnaf/FiOKwHpuVErRxPG/br87asXlUv+73h5au/WZ0GH/pVfoDoxvxuVb8sdWVMl8+4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBg/AN+imD38J+R8AAAAABJRU5ErkJggg==" alt="Digital futures logo" className="logoimage" /> DFX
                    </a>
                    <div class="navbar-collapse collapse flex-grow-1 justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {/* <a class="nav-item nav-link 1" href="#"> Talk to us {/*<span class="sr-only">(current)</span></a>*/}
                            {/* <a class="nav-item nav-link 2" href="#"> Home button </a> */}
                            {/* <a class="nav-item nav-link 3" href="#"> Your requirements </a> */}
                            <a class="nav-item nav-link 4" href="#"> Talent spotlight </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;

