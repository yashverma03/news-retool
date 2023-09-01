export const getNews = async (req, res) => {
  try {
    const { search, country } = req.query;

    if (search) {
      console.log('Search Query:', search);
    }

    if (country) {
      console.log('Country Query:', country);
    }

    res.send('Get all news working correctly');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
