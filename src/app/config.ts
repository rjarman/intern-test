import {
  Checkbox,
  Database,
  FileUpload,
  LinearScale,
  MultipleChoice,
  ShortText,
} from './type';

export const FORM_CRED = {
  password: '123456',
  captcha: 'momx',
  email: 'example@gmail.com',
};

// test database
export const DATABASE: Database<
  MultipleChoice | LinearScale | Checkbox | ShortText | FileUpload
>[] = [
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e3d',
    title: 'Rafsun1',
    description: 'sjbkaxba',
    date: '14-5-21',
    question: {
      question: 'ksdbckbckascb',
      choices: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e4d',
    title: 'Rafsun2',
    description: 'sjbkaxba',
    date: '14-5-21',
    question: {
      question: 'ksdbckbckascb',
      description: 'aksjbx',
      range: {
        lower: 5,
        upper: 100,
      },
      labels: {
        left: 'hello',
        right: 'hi',
      },
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5d',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6d',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7d',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },

  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5e',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6f',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7g',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },

  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5h',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6i',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7j',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e3d',
    title: 'Rafsun1',
    description: 'sjbkaxba',
    date: '14-5-21',
    question: {
      question: 'ksdbckbckascb',
      choices: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e4d',
    title: 'Rafsun2',
    description: 'sjbkaxba',
    date: '14-5-21',
    question: {
      question: 'ksdbckbckascb',
      description: 'aksjbx',
      range: {
        lower: 5,
        upper: 100,
      },
      labels: {
        left: 'hello',
        right: 'hi',
      },
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5d',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6d',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7d',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },

  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5e',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6f',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7g',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },

  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5h',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6i',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7j',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e3d',
    title: 'Rafsun1',
    description: 'sjbkaxba',
    date: '14-5-21',
    question: {
      question: 'ksdbckbckascb',
      choices: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e4d',
    title: 'Rafsun2',
    description: 'sjbkaxba',
    date: '14-5-21',
    question: {
      question: 'ksdbckbckascb',
      description: 'aksjbx',
      range: {
        lower: 5,
        upper: 100,
      },
      labels: {
        left: 'hello',
        right: 'hi',
      },
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5d',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6d',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7d',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },

  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5e',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6f',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7g',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },

  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5h',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6i',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7j',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e3d',
    title: 'Rafsun1',
    description: 'sjbkaxba',
    date: '14-5-21',
    question: {
      question: 'ksdbckbckascb',
      choices: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e4d',
    title: 'Rafsun2',
    description: 'sjbkaxba',
    date: '14-5-21',
    question: {
      question: 'ksdbckbckascb',
      description: 'aksjbx',
      range: {
        lower: 5,
        upper: 100,
      },
      labels: {
        left: 'hello',
        right: 'hi',
      },
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5d',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6d',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7d',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },

  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5e',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6f',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7g',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },

  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e5h',
    title: 'Rafsun3',
    description: 'sjbkaxba',
    date: '16-5-21',
    question: {
      question: 'ksdbckbckascb',
      answers: ['ksabx', 'aksjbx'],
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6i',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7j',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e6k',
    title: 'Rafsun4',
    description: 'sjbkaxba',
    date: '17-5-21',
    question: {
      question: 'ksdbckbckascb',
      text: 'khhbsdkb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7l',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
  {
    id: '1abdbd95-3cf2-4259-bbed-fa086ec06e7m',
    title: 'Rafsun5',
    description: 'sjbkaxba',
    date: '18-5-21',
    question: {
      question: 'ksdbckbckascb',
      allowType: 'pdf',
      maxSize: '12mb',
    },
  },
];
