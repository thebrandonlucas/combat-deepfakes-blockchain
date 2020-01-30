import React, { Component } from 'react';

export default class Navbar extends Component {
	constructor(props) {
		super(props)
		this.handleSearch = this.handleSearch.bind(this)
		this.changePage = this.changePage.bind(this)
		
		this.state = {
			showCompare: null, 
			search: null, 
			pages: [
				{id: "exploreDeepfakes", title: "Explore Deepfakes"}, 
				{id: "exploreOriginals", title: "Explore Originals"}, 
				{id: "myVideos", title: "My Videos"}, 
				{id: "deepCoin", title: "Deepcoin"}
			]
		}
	}

	handleSearch(e) {
		this.props.onSearch(e)
	}

	changePage(e) {
		this.props.changePage(e)
	}

	showCompareSearch = (event) => {
		let showCompare = this.state.showCompare
		this.setState({
		  showCompare: !showCompare
		})
	}

	render() {
		return(
			<nav className="navbar fixed-top bg-dark flex-md-nowrap p-0 shadow">
				<li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
				  <small className="text-white">Account: {this.props.account}</small>
				</li>
				<div className="row">
					{
						this.state.pages.map((page) => {
							return (
									<a 
										key={page.id}
										className="nav-link" 
										id={page.id} 
										href={`#${page.id}`}
										onClick={this.changePage}
									>
										{page.title}
									</a>
							)
						})
					}
				</div>
			</nav>
		)
	}
}