export default [{
  id: 1,
  user: {
    name: 'Mathieu',
    job: 'Mechanical Engineer',
    company: 'Enki'
  },
  subject: 'Hi!',
  dest: [
    {
      name: 'Bruno',
      job: 'CTO',
      company: 'Enki'
    },
    {
      name: 'Arseny',
      job: 'Software Developer',
      company: 'Enki'
    }
  ]
}, {
  id: 2,
  user: {
    name: 'Bruno'
  },
  subject: 'javascript',
  dest: [
    {
      name: 'Mathieu',
      job: 'CTO',
      company: 'Enki'
    },
    {
      name: 'Arseny',
      job: 'Tool Engineer',
      company: 'Enki'
    }
  ]
}, {
  id: 3,
  user: {
    name: 'you can search for me using a regex : `java$`'
  },
  subject: 'java',
  dest: [
    {
      name: 'Bruno',
      job: 'CTO',
      company: 'Enki'
    },
    {
      name: 'Arseny',
      job: 'Software Engineer',
      company: 'Enki'
    }
  ]
}]
