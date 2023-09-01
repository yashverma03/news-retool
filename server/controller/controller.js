import axios from 'axios';

export const getNews = async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;

    const { search, country } = req.query;

    let apiUrl = 'https://newsapi.org/v2/';

    if (!search && !country) {
      apiUrl += `everything?apiKey=${apiKey}&q=india`;
    } else if (search && country) {
      apiUrl += `everything?apiKey=${apiKey}&q=${search}&country=${country}`;
    } else if (search) {
      apiUrl += `everything?apiKey=${apiKey}&q=${search}`;
    } else if (country) {
      apiUrl += `top-headlines?apiKey=${apiKey}&country=${country}`;
    } else {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const response = await axios.get(apiUrl);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
