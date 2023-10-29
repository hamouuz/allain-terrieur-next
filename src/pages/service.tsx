// pages/service.tsx
import React from 'react';
import ServicesPage1 from '@/components/services/service1';
import ServicesPage2 from '@/components/services/service2'; 
import ServicesPage3 from '@/components/services/service3'; 
import ServicesPage4 from '@/components/services/service4'; 

const ServicePage: React.FC = () => {
  return (
    <>
      <ServicesPage1 />
      <ServicesPage2 />
      <ServicesPage3 />
      <ServicesPage4 />
    </>
  );
}

export default ServicePage;
