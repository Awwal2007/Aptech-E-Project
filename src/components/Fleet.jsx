import React, { useState, useMemo } from 'react';
import './css/Fleet.css';
import carsData from '../data/cars';
import { BiSearch, BiChevronDown, BiChevronLeft, BiChevronRight, BiHeart } from 'react-icons/bi';

const Fleet = () => {
  // Temporary state for inputs
  const [tempFilters, setTempFilters] = useState({
    searchTerm: '',
    carType: 'All Types',
    model: 'All Models',
    maxPrice: 200000,
    fuelType: 'All Fuels'
  });

  // Active state used for the visible results
  const [activeFilters, setActiveFilters] = useState({ ...tempFilters });
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Derive unique filter options from data
  const carTypes = ['All Types', ...new Set(carsData.cars.map(car => car.category))];
  const brandsForDatalist = [...new Set(carsData.cars.map(car => car.brand))];
  const modelOptions = ['All Models', ...new Set(carsData.cars.map(car => car.model))];
  const fuelTypes = ['All Fuels', ...new Set(carsData.cars.map(car => car.type))];

  // Filtering Logic - depends ONLY on activeFilters
  const filteredCars = useMemo(() => {
    return carsData.cars.filter(car => {
      const matchesSearch = car.brand.toLowerCase().includes(activeFilters.searchTerm.toLowerCase()) || 
                            car.model.toLowerCase().includes(activeFilters.searchTerm.toLowerCase());
      const matchesType = activeFilters.carType === 'All Types' || car.category === activeFilters.carType;
      const matchesModel = activeFilters.model === 'All Models' || car.model === activeFilters.model;
      const matchesPrice = car.price <= activeFilters.maxPrice;
      const matchesFuel = activeFilters.fuelType === 'All Fuels' || car.type === activeFilters.fuelType;

      return matchesSearch && matchesType && matchesModel && matchesPrice && matchesFuel;
    });
  }, [activeFilters]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const currentCars = filteredCars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleApply = () => {
    setActiveFilters({ ...tempFilters });
    setCurrentPage(1);
  };

  const resetFilters = () => {
    const defaultFilters = {
      searchTerm: '',
      carType: 'All Types',
      model: 'All Models',
      maxPrice: 200000,
      fuelType: 'All Fuels'
    };
    setTempFilters(defaultFilters);
    setActiveFilters(defaultFilters);
    setCurrentPage(1);
  };

  return (
    <section className="fleet-container"  id="brands">
      <div className="fleet-header">
        <p className="fleet-subtitle">OUR FLEET</p>
        <h2 className="fleet-title">FIND YOUR PERFECT DRIVE</h2>
      </div>

      <div className="fleet-layout">
        {/* Sidebar Filter */}
        <aside className="fleet-sidebar">
          <h3>REFINE VELOCITY</h3>
          
          <div className="filter-group">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="SEARCH BRANDS..." 
                list="brand-list"
                value={tempFilters.searchTerm}
                onChange={(e) => setTempFilters({ ...tempFilters, searchTerm: e.target.value })}
              />
              <datalist id="brand-list">
                {brandsForDatalist.map(brand => (
                  <option key={brand} value={brand} />
                ))}
              </datalist>
              <BiSearch className="search-icon" />
            </div>
          </div>

          <div className="filter-group">
            <label>CAR TYPE</label>
            <div className="select-wrapper">
              <select 
                value={tempFilters.carType} 
                onChange={(e) => setTempFilters({ ...tempFilters, carType: e.target.value })}
              >
                {carTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
          </div>

          <div className="filter-group">
            <label>MODEL</label>
            <div className="select-wrapper">
              <select 
                value={tempFilters.model} 
                onChange={(e) => setTempFilters({ ...tempFilters, model: e.target.value })}
              >
                {modelOptions.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
          </div>

          <div className="filter-group">
            <div className="price-label">
                <label>MAX PRICE</label>
                <span className="price-display">${tempFilters.maxPrice.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="20000" 
              max="200000" 
              step="5000"
              value={tempFilters.maxPrice} 
              onChange={(e) => setTempFilters({ ...tempFilters, maxPrice: parseInt(e.target.value) })}
              className="price-slider"
            />
            <div className="price-range text-muted">
              <span>$20k</span>
              <span>$200k</span>
            </div>
          </div>

          <div className="filter-group">
            <label>FUEL TYPE</label>
            <div className="select-wrapper">
              <select 
                value={tempFilters.fuelType} 
                onChange={(e) => setTempFilters({ ...tempFilters, fuelType: e.target.value })}
              >
                {fuelTypes.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
          </div>

          <div className="filter-buttons">
            <button className="btn-reset" onClick={resetFilters}>RESET</button>
            <button className="btn-apply" onClick={handleApply}>APPLY</button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="fleet-main">
          <div className="car-grid">
            {currentCars.length > 0 ? (
              currentCars.map(car => (
                <div key={car.id} className="car-card">
                  <div className="car-img-wrapper">
                    <span className="badge-hot">HOT</span>
                    <img src={car.images[0]} alt={car.model} />
                    <button className="btn-wishlist">
                      <BiHeart />
                    </button>
                  </div>
                  <div className="car-details">
                    <h3>{car.brand}</h3>
                    <p className="car-price">${car.price.toLocaleString()}</p>
                    <div className="car-specs">
                      {car.features.slice(0, 3).map((feat, i) => (
                        <span key={i} className="spec-tag">{feat.value}</span>
                      ))}
                    </div>
                    <button className="btn-view">View Details</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No vehicles match your criteria</h3>
                <p>Try adjusting your filters or resetting them.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="pag-arrow" 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <BiChevronLeft />
              </button>
              
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  className={`pag-num ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button 
                className="pag-arrow" 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <BiChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
