import Link from 'next/link';
import { ArrowLeft } from 'phosphor-react';
import { Page } from '../../components/Page';

export default function Description() {
  return (
    <Page>
      <Link href="/">
        <button className="flex items-center px-6 py-2 rounded shadow-sm bg-white dark:bg-gray-600 dark:text-white gap-2 transition-colors">
          <ArrowLeft size={18} />
          Back
        </button>
      </Link>

      <div className="mt-8 flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-28">
        <img
          src="https://imagepng.org/wp-content/uploads/2017/04/bandeira-do-brasil.png"
          alt="Brazil"
        />

        <div className="flex flex-col items-start justify-center gap-8 dark:text-gray-200">
          <h2 className="text-2xl font-bold dark:text-white">Brazil</h2>

          <div className="flex flex-col lg:flex-row gap-8 -mt-2 lg:mt-0 w-full items-start justify-between text-sm lg:text-base">
            <div className="font-semibold leading-7">
              <div>
                Native Name:{' '}
                <span className="text-gray-400 dark:text-gray-400">Brasil</span>
              </div>
              <div>
                Population:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  215.000.000
                </span>
              </div>
              <div>
                Region:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  America
                </span>
              </div>
              <div>
                Sub region:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  Soult America
                </span>
              </div>
              <div>
                Capital:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  Brasilia
                </span>
              </div>
            </div>

            <div className="font-semibold leading-7 text-sm lg:text-base">
              <div>
                Top Level Domain:{' '}
                <span className="text-gray-400 dark:text-gray-400">.br</span>
              </div>
              <div>
                Currencies:{' '}
                <span className="text-gray-400 dark:text-gray-400">Real</span>
              </div>
              <div>
                Languages:{' '}
                <span className="text-gray-400 dark:text-gray-400">
                  Portugues Brasil
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 lg:mt-8">
            <strong className="flex-shrink-0">Border countries:</strong>

            <div className="flex flex-wrap gap-2 dark:text-gray-300 text-xs">
              <Link href="/country/34234">
                <span className="bg-white rounded px-4 py-1 dark:bg-gray-600 text-xs shadow-md cursor-pointer transition-colors">
                  Argentina
                </span>
              </Link>
              <Link href="/country/34234">
                <span className="bg-white rounded px-4 py-1 dark:bg-gray-600 text-xs shadow-md cursor-pointer transition-colors">
                  Argentina
                </span>
              </Link>
              <Link href="/country/34234">
                <span className="bg-white rounded px-4 py-1 dark:bg-gray-600 text-xs shadow-md cursor-pointer transition-colors">
                  Argentina
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
