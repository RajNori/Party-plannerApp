async function newFormHandler(event) {
  event.preventDefault();
  const comment = document.querySelector('#cake-comment').value;
  const name = document.querySelector('#comment-name').value;

  const response = await fetch('/api/cakes', {
    method: 'POST',
    body: JSON.stringify({
      name,
      comment,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload('/cakes');
  } else {
    alert('Failed to add cake');
  }
}

document.querySelector('.new-cake-form').addEventListener('submit', newFormHandler);
