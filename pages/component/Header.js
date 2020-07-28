
   
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    render(){
        return(

<header>
	<div class="container">
		<div class="header d-lg-flex justify-content-between align-items-center">
			<div class="header-agile">
				<h1>
					<Link to="/" class="navbar-brand logo">
					<span class="fa fa-scissors" aria-hidden="true" ></span> Men spa	<span class="fa fa-user-secret" aria-hidden="true" ></span>
					</Link>
				</h1>
			</div>
			<div class="nav_w3ls">
				<nav>
					<label for="drop" class="toggle mt-lg-0 mt-1"><span class="fa fa-bars" aria-hidden="true"></span></label>
					<input type="checkbox" id="drop" />
						<ul class="menu">
							<li class="mr-lg-3 mr-2 active"><Link to="/">Home</Link></li>
							<li class="mr-lg-3 mr-2"><Link to="/About">About </Link></li>
							<li class="mr-lg-3 mr-2 p-0">
				
							<label for="drop-2" class="toggle">Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span> </label>
							<Link to="/"> Dropdown <span class="fa fa-angle-down" aria-hidden="true"></span> </Link>

							<input type="checkbox" id="drop-2"/>
							<ul class="inner-dropdown">
								<li><Link to="/Service">What We Do</Link></li>
								<li><Link to="/Single">See more</Link></li>
							</ul>
							</li>
							<li class="mr-lg-3 mr-2"><Link to="/Gallery">Gallery</Link></li>
							<li class="mr-lg-3 mr-2"><Link to="/Contact">Contact Us</Link></li>
							

						</ul>
				</nav>
			</div>

		</div>
	</div>
</header>





        );
    }
}

export default Header;