import express from 'express'
import swaggerUi from 'swagger-ui-express'
import Routes from './albumRouters'
const swaggerDocument = require("../documentation/swagger.json");

const router = express();


router
    .get('/', (req, res) => {
        res.status(200).json({
            message: 'welcome to photo collections backend'
        })
    })
    .use('/api/v1/albums',Routes)
    .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
   export default router;
