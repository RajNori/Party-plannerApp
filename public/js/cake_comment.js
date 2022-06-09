async function newFormHandler(event) {
  event.preventDefault();
  const description = document.querySelector('#cake-comment').value;
  const name = document.querySelector('#comment-name').value;

  const currentLocation = window.location.pathname;

  const cakeId = currentLocation.split('/').slice(-1)[0];
  console.log('description = ' + description)
  console.log('cakeID = ' + cakeId)
  console.log('name = ' + name)

  const response = await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({
      name,
      description,
      cakeId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to add comment');
  }
}

document.querySelector('.cake-comment-form').addEventListener('submit', newFormHandler);

