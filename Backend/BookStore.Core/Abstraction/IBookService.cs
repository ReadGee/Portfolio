using BookStore.Core.Models;

namespace BookStore.Application.Service
{
    public interface IBookService
    {
        Task<Guid> CreateBook(Book book);
        Task<Guid> DeleteBook(Guid id);
        Task<List<Book>> GetAllBook();
        Task<Guid> UpdateBook(Guid id, string title, string descriptions, decimal price);
    }
}