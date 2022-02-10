import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField, Button } from '@mui/material';
import { Card } from 'react-bootstrap';
import swal from 'sweetalert';
import { useHistory} from 'react-router';



const AddProduct = () => {
    const [products, setProducts] = useState();
    const history = useHistory();
    const redirect_path = '/dashboard/manageProduct'

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newResigration = { ...products };
        newResigration[field] = value;
        setProducts(newResigration);
    }

    const handleSubmitProduct = e => {
        e.preventDefault();
        fetch('https://salty-taiga-52197.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                swal("Good job!", "Add Product Successfully!", "success");
                history.push(redirect_path);
            })

    }
    return (
        <div className='background' style={{ backgroundImage: `url("https://media.istockphoto.com/photos/string-light-bulbs-at-sunset-picture-id1300384615?b=1&k=20&m=1300384615&s=170667a&w=0&h=rkDm5TdJp_dU7VAknk4EuZEZ2ho2QQspOavjlwGrsuI=")`, minHeight: '500px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} lg={3}></Grid>
                    <Grid sx={{ marginTop: '50px' }} item xs={12} lg={7}>
                        <Card className='mx-1 py-4 px-4'>
                            <form onSubmit={handleSubmitProduct}>
                                <TextField
                                    required
                                    sx={{ width: '90%' }}
                                    onBlur={handleOnBlur}
                                    name='name'
                                    label="Product Name"
                                    variant="standard" />
                                <TextField
                                    required
                                    sx={{ width: '90%' }}
                                    onBlur={handleOnBlur}
                                    name='price'
                                    type='number'
                                    label="Price"
                                    variant="standard" />
                                <TextField
                                    required
                                    sx={{ width: '90%' }}
                                    onBlur={handleOnBlur}
                                    name='description'
                                    label="Description"
                                    variant="standard" />

                                <TextField
                                    required
                                    sx={{ width: '90%' }}
                                    onBlur={handleOnBlur}
                                    name='image'
                                    label="Image URl"
                                    variant="standard" />
                                <Button sx={{ mt: 2 }} type='submit' variant="contained">Add Product</Button>
                            </form>
                        </Card>

                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AddProduct;