import React, { Component } from 'react'
class Navbar extends Component {
    render() {
        return (
            <section>
                <div className='menu-bar'>


                    <ul>
                        <li class="active"><a href="#"> Appointment</a></li>
                        <li><a href="#">Doctor</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#"><i class="fa fa-user"></i>About us</a>
                            <div class="sub-menu-1">
                                <ul>
                                    <li><a href="#">About hospital</a></li>
                                    <li><a href="#">Facilities</a></li>
                                    <li><a href="#">The team</a></li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>
        );
    }
}
export default Navbar;

