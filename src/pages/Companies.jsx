import React, { Suspense } from 'react';
import { NavLink } from 'react-router';
import Company from './Company';


const Companies = ({data}) => {
    
    // const companiesPromise = fetch('/jobs.json').then((res) => res.json());
    // const companies = use(companiesPromise);
    // const uniqueCompanies = Array.from(new Map(companies.map(item => [item.name, item])).values());

    
    return (
        
        <div className=''>
            <h2 className='font-bold text-2xl text-center my-8'>All Companies</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 ml-20'>
            
            
            {/* <div className='grid grid-cols-2'>
                {
                    uniqueCompanies.map(company => <NavLink key={company.id}>{company.name}</NavLink>)
                }
            </div> */}

            <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
            {
                data.map((singleCompany) => <Company key={singleCompany.jobs.id} singleCompany={singleCompany}></Company>)
            }
            </Suspense>
        </div>
        </div>
    );
};

export default Companies;