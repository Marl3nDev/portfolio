import React from 'react';
import './App.css';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All'
    };
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  onSelectFilter(filter) {
    this.setState({ selectedFilter: filter });
  }

  render() {
    const projects = [
      {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
        category: "Flayers"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
        category: "Flayers"
      }
    ];

    const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

    let filteredProjects = projects;
    if (this.state.selectedFilter !== 'All') {
      filteredProjects = projects.filter(p => p.category === this.state.selectedFilter);
    }

    console.log('Portfolio render', this.state.selectedFilter, filteredProjects.length);

    return (
      <div className="portfolio">
        <Toolbar
          filters={filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  console.log('Toolbar render', selected);
  return (
    <div className="toolbar">
      {filters.map(filter => (
        <button
          key={filter}
          className={selected === filter ? 'active' : ''}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

const ProjectList = ({ projects }) => {
  console.log('ProjectList render', projects.length);
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
