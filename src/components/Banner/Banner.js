import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <h2 className="banner-heading">
          Search <span>Cosmetic Surgeon</span> & Make an Appointment
        </h2>
        <div className="banner-search">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Ex. Name, Specialization ..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              className="btn button"
              variant="outline-primary btn-secondary"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Banner;
