import axios from 'axios';
class albumControllers{

    static async listOfAlbum(req,res){
        try {
            const albumId = req.params.albumId;
            await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then(async(response) => {
              var array = response.data;
              res.status(200).json({
                status: 200,
                data: array,
              });
            })
            .catch(err => {
              console.log(err);
            });
            
          } catch (error) {
            //console.log(error);
            res.status(500).send({
              status: 500,
              message: "server Error",
            });
          }
    }

}
export default albumControllers
