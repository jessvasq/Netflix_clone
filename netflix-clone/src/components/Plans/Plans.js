import React, { useEffect, useState } from 'react';
import './Plans.css';
import db from '../../firebase';

function Plans() {
    const [products, setProducts] = useState([]);   

    useEffect(() => {
        db.collection('products')
        .where('active', '==', true)
        .get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            });
            setProducts(products);
        });
    }, []);

    return (
        
        <div className='plans'> 
            <div className='plan-info'>
                <h5>Basic Plan</h5>
                <h6>720p</h6>
            </div>
            <button>Current Package</button>
        </div>
    )
};

export default Plans;
