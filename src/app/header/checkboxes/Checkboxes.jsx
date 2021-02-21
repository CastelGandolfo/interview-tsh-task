import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Checkboxes = () => {
  const [active, isActive] = useState(false);
  const [promo, isPromo] = useState(false);

  return (
    <div>
      <Form.Check
        id={`custom-inline-checkbox-1`}
        custom
        inline
        label='Active'
        type='checkbox'
        checked={active}
        onChange={(e) => isActive(e.target.checked)}
      />
      <Form.Check
        id={`custom-inline-checkbox-2`}
        custom
        inline
        label='Promo'
        type='checkbox'
        checked={promo}
        onChange={(e) => isPromo(e.target.checked)}
      />
    </div>
  );
};

export default Checkboxes;
