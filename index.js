import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const app = express();

const swaggerAPIDesc = swaggerJsDoc({
    swaggerDefinition: {
        info: {
            title: 'Swagger Test',
            version: '1.0.0'
        }
    },
    apis: ['index.js']
});

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerAPIDesc));

/**
 * @swagger
 * /getData:
 *   get:
 *     description: This is a get api call
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/getData', (req,res)=>{
    res.send([
        {
            name:'test'
        }
    ])
});

/**
 * @swagger
 * /saveData:
 *   post:
 *     description: This is a post call to save data
 *     responses:
 *       201:
 *         description: Success or Saved
 *       403:
 *         description: Unauthorised
 *     parameters:
 *       - name: Title
 *         in: formData
 *         required: true
 *         type: string
 *         description: name of person    
 */
app.post('/saveData', (req,res)=>{
    res.status(201).send('saved successfully');
})

/**
 * @swagger
 * /updateData:
 *   put:
 *     description: This is a put call to update data
 *     responses: 
 *       200:
 *         description: Success
 */
app.put('/updateData', (req,res)=>{
    res.send('updated successfully');
})

/**
 * @swagger
 * /deleteData:
 *   delete:
 *     description: This is delete call to delete data
 *     responses: 
 *       200:
 *         description: Deleted or success
 */
app.delete('/deleteData', (req,res)=>{
    res.send('deleted successfully');
})
app.listen(3000, ()=>{
    console.log('Server is started on 3000');
})
