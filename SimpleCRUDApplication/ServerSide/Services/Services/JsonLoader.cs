using Services.Interfaces;

namespace Services
{
    public class JsonLoader : IJsonLoader
    {
        public string GetJsonSource()
        {
            return @"./../json/generated.json";
        }
    }
}