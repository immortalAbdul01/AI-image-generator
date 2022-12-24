
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey:'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',
});
const openai = new OpenAIApi(configuration);
exports.generateimage = async (req, res) => {
    const { prompt, size } = req.body


    const imageSize =
        size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize,
        });
        const Imgurl = response.data.data[0].url
        res.status(200).json({
            sucess: true,
            data: Imgurl
        })
    }
    catch (err) {
        res.status(404).json({
            mssg: err
        })

    }

}
