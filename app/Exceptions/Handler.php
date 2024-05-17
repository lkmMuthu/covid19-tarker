<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($exception instanceof ModelNotFoundException) {
//            return parent::render($request, $exception);
            $modelName = strtolower(class_basename($exception->getModel()));
            return response()->json(['success' => false, 'message' => 'Does not exists any {$modelName} with the specified identificator', 'code' => 404], 404);
        }

        if ($exception instanceof AuthenticationException) {
            return response()->json(['success' => false, 'message' => $exception->getMessage() ? $exception->getMessage() : trans('auth.unauth'), 'code' => 401], 401);
        }

        if ($exception instanceof AuthorizationException) {
            return response()->json(['success' => false, 'message' => $exception->getMessage() ? $exception->getMessage() : trans('auth.forbidden'), 'code' => 403], 403);
        }
        if ($exception instanceof NotFoundHttpException) {
            return response()->json(['success' => false, 'message' => $exception->getMessage(), 'code' => $exception->getStatusCode()], $exception->getStatusCode());
        }

         if ($exception instanceof \Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException) {
            return response()->json(['success' => false, 'message' => trans('auth.methodNotFound'), 'code' => 405], 405);
        }
        if ($exception instanceof HttpException) {
             return response()->json(['success' => false, 'message' => $exception->getMessage()?$exception->getMessage(): trans('auth.methodNotFound'), 'code' => $exception->getStatusCode()], $exception->getStatusCode());
        }
        
         if ($exception instanceof \Illuminate\Database\QueryException) {
            $errorCode = $exception->errorInfo[1];
            if ($errorCode == 1451) {
                return response()->json(['success' => false, 'message' => 'Cannot remove this resource permanently. It is related with any other resource', 'code' => 409], 409);
            }
        }

       if (config('app.debug')) {
            return parent::render($request, $exception);
        }
        return response()->json(['success' => false, 'message' => trans('auth.unexpected'), 'code' => 500], 500);
    
    }

    /**
     * Convert an authentication exception into an unauthenticated response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
         return response()->json(['success' => false, 'message' => trans('auth.unauth'), 'code' => 401], 401);
//        if ($request->expectsJson()) {
//            return response()->json(['error' => 'Unauthenticated.'], 401);
//        }
//
//        return redirect()->guest(route('login'));
    }
}
