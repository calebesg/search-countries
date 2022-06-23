export function CountryCard() {
  return (
    <a href="/">
      <div className="rounded overflow-hidden bg-white dark:bg-gray-600 transition-colors shadow-sm shadow-shadow-200 dark:shadow-gray-800">
        <img
          src="https://imagepng.org/wp-content/uploads/2017/04/bandeira-do-brasil.png"
          alt="Brazil"
        />
        <div className="p-6 dark:text-gray-200">
          <strong className="dark:text-white">Brazil</strong>
          <div className="my-4 text-sm leading-relaxed">
            <div>
              <span className="font-bold">Population:</span> 215.000.000
            </div>
            <div>
              <span className="font-bold">Region:</span> America
            </div>
            <div>
              <span className="font-bold">Capital:</span> Brasília
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
